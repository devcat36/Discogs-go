const pkg = require("graphql");
const { getPreviewSearchResult } = require("./business_logic.js");

const { GraphQLScalarType, Kind } = pkg;

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime",
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
    __resolveType(obj, context, info){
      switch(obj.kind){
        case('master'): return 'Master';
        case('artist'): return 'Artist';
        case('item'): return 'Item';
        default: return null;
      }
    }
  },
  Query: {
    user: (parent, args) => getUserById(args.id),
    previewSearch: async (parent, args) => {
      const searchResult = await getPreviewSearchResult(args.term, args.length);
      console.log(args.term, searchResult);
      return searchResult;
    },
  },

};
module.exports = resolvers;

function getUserById(id) {
  return {
    id,
    userName: "Kolkipo",
    realName: "Steve Jobs",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    adminPermission: false,
    sellerPermission: true,
    contributerPermission: true,
    emailAddress: "steve@apple.com",
    language: "EN",
    timeZone: "UTC",
    profile: "Lorem ipsum",
    homePage: "example.com",
  };
}
