export const mock_db = {
  User: [
    {
      id: '1',
      userName: 'daydream',
      realName: 'Alex',
      image: 'https://picsum.photos/200',
      cart: {
        itemCount: 1,
        sellerCount: 1,
        order: [
          {
            id: 12345,
            dateTimeCreated: 12345,
            dateTimeModified: 23456,
            items: [1],
            seller: 12345,
            subTotal: {
              currency: 'USD',
              cost: 5.00,
            },
            total: {
              currency: 'USD',
              cost: 7.00
            },
            shipping: {
              currency: 'USD',
              cost: 2.00
            },
            timeline: [
              {
                id: 12345,
                sender: 12345,
                receiver: 23456,
                timestamp: 30000,
                order: 12345,
                status: 'NEW_ORDER'
              }
            ],
            status: 'NEW_ORDER'
          }
        ]
      },
      messages: [
        {
          id: 12345,
          sender: 12345,
          receiver: 23456,
          timestamp: 30000,
          order: 12345,
          status: 'NEW_ORDER'
        }
      ],
      adminPermission: false,
      sellerPermission: false,
      contributerPermission: true,
      emailAddress: 'example@example.com',
      language: 'English',
      timeZone: 'PST',
      profile: 'Lorem ipsum dolor sit amet',
      location: 'Nowhere',
      homePage: 'example.com',
      sellerSettings: null,
      buyerSettings: {
        currency: 'USD',
        address: {
          fullName: 'Alex',
          address1: 'planer district',
          address2: 'coutier st. 123',
          city: 'amsterdam',
          region: 'zealand',
          country: 'ZW'
        }
      }
    },
    {
      id: 23456,
      userName: 'saletim',
      realName: 'Jhon',
      image: 'https://picsum.photos/200',
      cart: {
        itemCount: 0,
        sellerCount: 0,
        orders: []
      },
      messages: [
        {
          id: 12345,
          sender: 12345,
          receiver: 23456,
          timestamp: 30000,
          order: 12345,
          status: 'NEW_ORDER'
        }
      ],
      adminPermission: false,
      sellerPermission: true,
      contributerPermission: true,
      emailAddress: 'example@example.com',
      language: 'English',
      timeZone: 'PST',
      profile: 'Lorem ipsum dolor sit amet',
      location: 'Nowhere',
      homePage: 'example.com',
      sellerSettings: {
        paymentMethods: ['PayPal'],
        country: 'PG',
        sellerTerm: 'Lorem ipsum'
      },
      buyerSettings: {
        currency: 'USD',
        address: {
          fullName: 'Jhon',
          address1: 'inpilis district',
          address2: 'henter st. 234',
          city: 'amsterdam',
          region: 'zealand',
          country: 'ZW'
        }
      }
    }
  ],
  Order: [
    {
      id: '1',
      dateTimeCreated: 12345,
      dateTimeModified: 23456,
      items: ['1'],
      seller: 'auth0|5f8af419fe68c8006860974f',
      buyer: 'auth0|5f8af3f0bbda50006a0f134d',
      subTotal: {
        currency: 'USD',
        cost: 5.00,
      },
      total: {
        currency: 'USD',
        cost: 7.00
      },
      shipping: {
        currency: 'USD',
        cost: 2.00
      },
      timeline: ['1'],
      status: 'NEW_ORDER'
    }
  ],
  Item: [
    {
      id: 1,
      release: '1',
      price: {currency: 'USD', value: 5.00},
      shipping: {currency: 'USD', value: 2.00},
      mediaCondition: 'M',
      sleeveCondition: 'M',
      seller: '5f8af3f0bbda50006a0f134d',
      notes: 'Lorem Ipsum'
    },
    {
      id: 2,
      release: null,
      price: {currency: 'KRW', value: 3.00},
      shipping: {currency: 'KRW', value: 2.00},
      mediaCondition: 'M',
      sleeveCondition: 'M',
      seller: 12345,
      notes: 'Lorem Ipsum'
    },
    {
      id: 3,
      release: null,
      price: {currency: 'USD', value: 5.00},
      shipping: {currency: 'USD', value: 2.00},
      mediaCondition: 'M',
      sleeveCondition: 'M',
      seller: 12345,
      notes: 'Lorem Ipsum'
    },
  ],
  Release: [
    {
      id: 1,
      image: ['https://img.discogs.com/PcjJoQjmihSxBL7pXyjuiCWka6c=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7653750-1446020313-2744.jpeg.jpg'],
      artist: null,
      title: 'Sometime Last Night',
      format: 'CD',
      formatSpec: [],
      country: 'ZW',
      year: 2015,
      genres: ['ROCK','POP'],
      trackList: [
        {pos: '1', title: 'All Night'},
        {pos: '2', title: 'Wild Hearts'},
        {pos: '1', title: 'Dark Side'},
      ],
      notes: 'Ⓒ Ⓟ 2015 Hollywood Records, Inc.\nMade in Japan',
      submissionNotes: '',
      master: null,
    }
  ],
  Master:[
    {
      id: '1',
      title: 'Sometime Last Night',
      artist: [1],
      image: ['https://img.discogs.com/PcjJoQjmihSxBL7pXyjuiCWka6c=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7653750-1446020313-2744.jpeg.jpg'],
      genre: ['ROCK','POP'],
      year: 2015,
      keyRelease: '1',
      release: ['1']
    }
  ]
};