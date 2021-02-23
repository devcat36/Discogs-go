const { MongoClient, ObjectId } = require("mongodb");

const DB_URI = "mongodb://localhost:27017/discogs";
const DB_NAME = "discogs";

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
  console.log("connected to database");
  db = client.db(DB_NAME);

  existingValues.country = await db.collection("release").distinct("country");
  existingValues.genre = await db.collection("release_genre").distinct("genre");
  existingValues.year = await db.collection("master").distinct("year");
}
exports.initDB = init;

async function getSearchResult({ term, startIndex, endIndex }) {}

async function getPreviewSearchResult(term, length) {
  const masterResults = await db
    .collection("master")
    .aggregate([
      { $match: { $text: { $search: term } } },
      { $sort: { score: { $meta: "textScore" } } },
      { $limit: length },
      {
        $project: {
          _id: 0,
          title: 1,
          id: 1,
          score: { $meta: "textScore" },
          kind: "master",
        },
      },
    ])
    .toArray();
  if (masterResults.length > 0) {
    const masterImages = await db
      .collection("master_image")
      .aggregate([
        {
          $match: {
            $or: masterResults.map((master) => ({ master_id: master.id })),
          },
        },
        { $project: { _id: 0, master_id: 1, uri: 1 } },
      ])
      .toArray();
    masterImages.forEach((image) => {
      masterResults[image.master_id].image = image.uri;
    });
  }
  const artistResults = await db
    .collection("artist")
    .aggregate([
      { $match: { $text: { $search: term } } },
      { $sort: { score: { $meta: "textScore" } } },
      { $limit: length },
      {
        $project: {
          _id: 0,
          name: 1,
          id: 1,
          score: { $meta: "textScore" },
          kind: "artist",
        },
      },
    ])
    .toArray();
  if (artistResults.length > 0) {
    const artistImages = await db
      .collection("artist_image")
      .aggregate([
        {
          $match: {
            $or: artistResults.map((artist) => ({ artist_id: artist.id })),
          },
        },
        { $project: { _id: 0, artist_id: 1, uri: 1 } },
      ])
      .toArray();
    artistImages.forEach((image) => {
      artistResults[image.artist_id].image = image.uri;
    });
  }
  let result = [...masterResults, ...artistResults];
  result.sort((a, b) => {
    if (a.score > b.score) return -1;
    else return 1;
  });
  result = result.slice(0, length);
  return result;
}
exports.getPreviewSearchResult = getPreviewSearchResult;