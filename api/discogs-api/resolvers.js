const pkg = require('graphql');
const {
  getPreviewSearchResult,
  getArtistSearchResult,
  getMasterSearchResult,
} = require('./database.js');

const { GraphQLScalarType, Kind } = pkg;

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),
  SearchObject: {
    __resolveType(obj, context, info) {
      switch (obj.kind) {
        case 'Master':
          return 'Master';
        case 'Artist':
          return 'Artist';
        case 'Item':
          return 'Item';
        default:
          return null;
      }
    },
  },
  Query: {
    user: (parent, args) => getUserById(args.id),
    previewSearch: async (parent, args) => {
      const searchResult = await getPreviewSearchResult(args.term, args.length);
      console.log(args.term, searchResult);
      return searchResult;
    },
    search: async (parent, args) => {
      const kind = args.searchType;
      console.log(args);
      let searchResult = [];
      switch (kind) {
        case 'Artist':
          searchResult = await getArtistSearchResult(args);
          break;
        case 'Master':
          searchResult = await getMasterSearchResult(args);
          break;
      }
      searchResult = searchResult.map((result) => ({ ...result, kind }));
      console.log(searchResult);
      return {
        totalResults: 100,
        result: searchResult,
        filters: []
      };
    },
  },
};
module.exports = resolvers;

function getUserById(id) {
  return {
    id,
    userName: 'Kolkipo',
    realName: 'Steve Jobs',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
    adminPermission: false,
    sellerPermission: true,
    contributerPermission: true,
    emailAddress: 'steve@apple.com',
    language: 'EN',
    timeZone: 'UTC',
    profile: 'Lorem ipsum',
    homePage: 'example.com',
  };
}
