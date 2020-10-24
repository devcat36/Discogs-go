import pkg from 'graphql';

const {GraphQLScalarType, Kind} = pkg;

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
  // SearchObject: {
  //   __resolveType(obj, context, info) {
  //     if (obj.name) {
  //       return 'Artist';
  //     }
  //
  //     if (obj.release) {
  //       return 'Master';
  //     }
  //
  //     if (obj.master) {
  //       return 'Release';
  //     }
  //
  //     return null;
  //   },
  // },
  // Query: {
  //   user: () => {
  //     return {
  //       id: '1',
  //       userName: 'daydream',
  //       realName: 'Alex',
  //       image: 'https://picsum.photos/200',
  //       cart: {
  //         itemCount: 1,
  //         sellerCount: 1,
  //         order: [] // link
  //       },
  //       messages: [], // link
  //       adminPermission: false,
  //       sellerPermission: false,
  //       contributerPermission: true,
  //       emailAddress: 'example@example.com',
  //       language: 'English',
  //       timeZone: 'PST',
  //       profile: 'Lorem ipsum dolor sit amet',
  //       location: 'Nowhere',
  //       homePage: 'example.com',
  //       sellerSettings: null,
  //       buyerSettings: {
  //         currency: 'USD',
  //         address: {
  //           fullName: 'Alex',
  //           address1: 'planer district',
  //           address2: 'coutier st. 123',
  //           city: 'amsterdam',
  //           region: 'zealand',
  //           country: 'ZW'
  //         }
  //       }
  //     }
  //   },
  //   item: () => {
  //     return {
  //       id: '1',
  //       release: '1',
  //       price: {currency: 'USD', value: 5.00},
  //       shipping: {currency: 'USD', value: 2.00},
  //       mediaCondition: 'M',
  //       sleeveCondition: 'M',
  //       seller: '2',
  //       notes: 'Lorem Ipsum'
  //     }
  //   },
  //   order: () => {
  //     return {
  //       id: '1',
  //       dateTimeCreated: 12345,
  //       dateTimeModified: 23456,
  //       items: [], // link
  //       seller: '2',
  //       buyer: '1',
  //       subTotal: {
  //         currency: 'USD',
  //         cost: 5.00,
  //       },
  //       total: {
  //         currency: 'USD',
  //         cost: 7.00
  //       },
  //       shipping: {
  //         currency: 'USD',
  //         cost: 2.00
  //       },
  //       timeline: ['1'],
  //       status: 'NEW_ORDER'
  //     }
  //   },
  //   release: () => {
  //   }
  // }
}
export default resolvers;