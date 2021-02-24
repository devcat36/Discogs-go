const { MongoClient, ObjectId } = require('mongodb');

const DB_URI = 'mongodb://localhost:27017/discogs';
const DB_NAME = 'discogs';

let existingValues = {
  country: [],
  genre: [],
  year: [],
};

const client = new MongoClient(DB_URI);
let db;

async function init() {
  await client.connect();
  await client.db(DB_NAME).command({ ping: 1 });
  console.log('connected to database');
  db = client.db(DB_NAME);

  existingValues.country = await db.collection('release').distinct('country');
  existingValues.genre = await db.collection('release_genre').distinct('genre');
  existingValues.year = await db.collection('master').distinct('year');
}
exports.initDB = init;

function __generateSortQuery(sortMethod) {
  if (sortMethod == 'relevence') return { score: { $meta: 'textScore' } };
  const field = sortMethod.split(',')[0];
  const order = sortMethod.split(',')[0] === 'DESC' ? -1 : 1;
  return { [field]: order };
}

function __generateLookupImageAggregate(collection) {
  return {
    $lookup: {
      from: `${collection}_image`,
      let: { id_var: '$id' },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [{ $eq: [`$${collection}_id`, '$$id_var'] }],
            },
          },
        },
        { $project: { _id: 0, uri: 1 } },
      ],
      as: 'image',
    },
  };
}

async function getArtistSearchResult({ term, startIndex, endIndex, sortField, sortOrder }) {
  let results = await db
    .collection('artist')
    .aggregate([
      { $match: { $text: { $search: term } } },
      { $sort: { score: { $meta: 'textScore' } } },
      { $skip: startIndex },
      { $limit: endIndex - startIndex + 1 },
      __generateLookupImageAggregate('artist'),
      { $project: { _id: 0, id: 1, name: 1, image: 1 } },
    ])
    .toArray();
  console.log(results);
  results = results.map((element) => ({
    ...element,
    image: element.image.map((image) => image.uri),
  }));
  return results;
}
exports.getArtistSearchResult = getArtistSearchResult;

async function getMasterSearchResult({ term, startIndex, endIndex, sortMethod, filter }) {
  const lookupAndMatchGenreAggregate =
    filter.genre && filter.genre.length > 0
      ? [
          {
            $lookup: {
              from: 'master_genre',
              let: { master_id: '$id' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$master_id', '$$master_id'] },
                        { $or: filter.genre.map((genre) => ({ $eq: ['$genre', genre] })) },
                      ],
                    },
                  },
                },
              ],
              as: 'genre',
            },
          },
          { $match: { $and: [{ genre: { $ne: [] } }] } },
        ]
      : [];
  const lookupAndMatchFormatAggregate =
    filter.format && filter.format.length > 0
      ? [
          {
            $lookup: {
              from: 'release_format',
              let: { main_release: '$main_release' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$release_id', '$$main_release'] },
                        { $or: filter.format.map((format) => ({ $eq: ['$name', format] })) },
                      ],
                    },
                  },
                },
              ],
              as: 'format',
            },
          },
          { $match: { $and: [{ format: { $ne: [] } }] } },
        ]
      : [];
  const lookupAndMatchYearAggregate =
    filter.year && filter.year.length > 0
      ? [
          {
            $lookup: {
              from: 'release',
              let: { main_release: '$main_release' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$id', '$$main_release'] },
                        { $or: filter.year.map((year) => ({ $eq: ['$year', year] })) },
                      ],
                    },
                  },
                },
              ],
              as: 'year',
            },
          },
          { $match: { $and: [{ year: { $ne: [] } }] } },
        ]
      : [];

  const lookupAndMatchCountryAggregate =
    filter.country && filter.country.length > 0
      ? [
          {
            $lookup: {
              from: 'release',
              let: { main_release: '$main_release' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $and: [
                        { $eq: ['$id', '$$main_release'] },
                        { $or: filter.country.map((country) => ({ $eq: ['$country', country] })) },
                      ],
                    },
                  },
                },
              ],
              as: 'country',
            },
          },
          { $match: { $and: [{ country: { $ne: [] } }] } },
        ]
      : [];

  let result = await db
    .collection('master')
    .aggregate([
      { $match: { $text: { $search: term } } },
      // ...lookupAndMatchGenreAggregate,
      // ...lookupAndMatchFormatAggregate,
      // ...lookupAndMatchYearAggregate,
      // ...lookupAndMatchCountryAggregate,
      { $sort: { score: { $meta: 'textScore' } } },
      { $skip: startIndex },
      { $limit: endIndex - startIndex + 1 },
      __generateLookupImageAggregate('master'),
      { $project: { _id: 0, id: 1, title: 1, image: 1 } },
    ])
    .toArray();
    result = result.map((element) => ({ ...element, image: element.image.map((image) => image.uri) }));
    console.log(result);
    return result;
}
exports.getMasterSearchResult = getMasterSearchResult;

async function getPreviewSearchResult(term, length) {
  if (!db) await init();
  const masterResults = await db
    .collection('master')
    .aggregate([
      { $match: { $text: { $search: term } } },
      { $sort: { score: { $meta: 'textScore' } } },
      { $limit: length },
      __generateLookupImageAggregate('master'),
      {
        $project: {
          _id: 0,
          title: 1,
          id: 1,
          image: 1,
          score: { $meta: 'textScore' },
          kind: 'Master',
        },
      },
    ])
    .toArray()
    .map((element) => ({ ...element, image: element.image.map((image) => image.uri) }));
  const artistResults = await db
    .collection('artist')
    .aggregate([
      { $match: { $text: { $search: term } } },
      { $sort: { score: { $meta: 'textScore' } } },
      { $limit: length },
      __generateLookupImageAggregate('artist'),
      {
        $project: {
          _id: 0,
          name: 1,
          id: 1,
          image: 1,
          score: { $meta: 'textScore' },
          kind: 'Artist',
        },
      },
    ])
    .toArray()
    .map((element) => ({ ...element, image: element.image.map((image) => image.uri) }));

  let result = [...masterResults, ...artistResults];
  result.sort((a, b) => {
    if (a.score > b.score) return -1;
    else return 1;
  });
  result = result.slice(0, length);
  return result;
}
exports.getPreviewSearchResult = getPreviewSearchResult;
