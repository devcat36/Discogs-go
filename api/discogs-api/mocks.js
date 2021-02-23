const casual = require("casual");
const { MockList } = require("apollo-server-express");

const MockList_WA = (count) => {
  const limit = Array.isArray(count)
    ? Math.floor(Math.random() * (count[1] - count[0] + 1) + count[0])
    : count;
  return [...Array(limit)].map(() => ({}));
};

const mocks = {
  User: () => ({
    userName: casual.username,
    realName: casual.name,
    image: "https://picsum.photos/300",
    adminPermission: false,
    sellerPermission: true,
    contributerPermission: true,
    emailAddress: casual.email,
    profile: casual.sentences(5),
    location: casual.city,
    homePage: casual.url,
  }),
  SellerInfo: () => ({
    sellerTerm: casual.sentences(10),
  }),
  Address: () => ({
    fullName: casual.full_name,
    address1: casual.address1,
    address2: casual.address2,
    city: casual.city,
    region: casual.state,
  }),
  Cost: () => ({
    value: casual.double(1, 100),
  }),
  DateTime: () => new Date(casual.unix_time),
  FormatSpec: () => {
    if (casual.random_element(["Size", "Speed"]) === "Size") {
      return {
        kind: "Size",
        value: casual.random_element(["LP", '8"']),
      };
    } else
      return {
        kind: "Speed",
        value: casual.random_element(["45RPM", "78RPM"]),
      };
  },
  Date: () => ({
    year: casual.year,
    month: casual.month_number,
    day: casual.day_of_month,
  }),
  Filter: () => {
    let category = casual.random_element(["CURRENCY", "GENRE", "FORMAT"]);
    let ret = {
      category: category,
      amount: casual.integer(1, 1000000),
    };
    if (category === "CURRENCY")
      ret.name = casual.random_element(["USD", "CHF", "EUR", "JPY", "KRW"]);
    else if (category === "GENRE")
      ret.name = casual.random_element([
        "ELECTRONIC",
        "REGGAE",
        "NONMUSIC",
        "CHILDRENS",
        "HIPHOP",
        "LATIN",
        "POP",
        "FOLK",
        "JAZZ",
        "FUNK",
        "CLASSICAL",
        "STAGE",
        "ROCK",
        "BLUES",
        "BRASS",
      ]);
    else if (category === "FORMAT")
      ret.name = casual.random_element([
        "VINYL",
        "ACETATE",
        "FLEXIDISC",
        "CD",
        "DVD",
        "BLURAY",
        "SACD",
      ]);
    return ret;
  },
  Item: () => ({
    notes: casual.sentences(5),
    image: ["https://picsum.photos/300"],
    comments: casual.sentence,
  }),
  Release: () => ({
    image: ["https://picsum.photos/300", "https://picsum.photos/300"],
    title: casual.title,
    artist: MockList_WA(1),
    trackList: MockList_WA(5),
    year: casual.year,
    notes: casual.sentences(3),
    submissoinNotes: casual.sentences(2),
  }),
  Track: () => ({
    name: casual.title,
    pos: casual.integer(1, 10).toString(),
    title: casual.title,
    artist: MockList_WA([0, 2]),
    alias: casual.array_of_words(2),
    member: [casual.name, casual.name],
    profile: casual.sentences(10),
    homePage: [casual.url],
    submissionNotes: casual.sentences(2),
  }),
  Master: () => ({
    title: casual.title,
    artist: MockList_WA([1, 2]),
    year: casual.year,
    notes: casual.sentences(3),
    submissionNotes: casual.sentences(2),
  }),
  CustomMessage: () => ({
    content: casual.sentence,
  }),
  SearchResult: () => ({
    totalResults: casual.integer(0, 1000000),
    filter: MockList_WA([5, 15]),
  }),
  Artist: () => ({
    name: casual.title,
    alias: [casual.name, casual.name],
    member: [casual.name, casual.name, casual.name],
    profile: casual.sentences(5),
    homePage: [casual.url],
    submissionNotes: casual.sentences(2),
  }),
  Message: () => {
    let kind = casual.random_element(["ORDER", "CUSTOM"]);
    if (kind === "ORDER") {
      return { kind: kind, content: null };
    } else {
      return {
        kind: kind,
        content: casual.sentence,
        order: null,
        orderStatus: null,
      };
    }
  },
  OrderTimeline: () => {
    let isCustom = casual.coin_flip;
    if (isCustom) return { isCustom, content: casual.sentence };
    else
      return {
        isCustom,
        content: casual.random_element([
          "NEW_ORDER",
          "INVOICE_SENT",
          "PAYMENT_RECEIVED",
          "SHIPPED",
          "CANCELED",
        ]),
      };
  },
};

exports.mocks = mocks;