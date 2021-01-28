import React from "react";
import { Divider, Grid, Icon, Menu, Table } from "semantic-ui-react";
import FilterSidebar from "./FilterSidebar";
import ExploreTab from "./ExploreTab";
import PaginationTop from "./PaginationTop";
import ExploreItem from "./ExploreItem";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import qs from "query-string";
import {
  CONDITION_OPTIONS,
  CURRENCY_SYMBOL,
  FORMAT_OPTIONS,
  GENRE_OPTIONS,
} from "../constants";

const amountOptions = [
  { key: "25", text: "25", value: "25" },
  { key: "50", text: "50", value: "50" },
  { key: "100", text: "100", value: "100" },
  { key: "200", text: "200", value: "200" },
];

const sortOptions = [
  {
    key: "Relevance",
    text: "Relevance",
    value: "Relevance",
  },
  {
    key: "Latest Additions",
    text: "Latest Additions",
    value: "Latest Additions",
  },
  { key: "Latest Edits", text: "Latest Edits", value: "Latest Edits" },
  { key: "Title, A-Z", text: "Title, A-Z", value: "Title, A-Z" },
  { key: "Title, Z-A", text: "Title, Z-A", value: "Title, Z-A" },
];

const SEARCH = gql`
  query Search(
    $term: String!
    $searchType: [String!]
    $filter: FilterInput
    $sort: String
    $startIndex: Int
    $endIndex: Int
  ) {
    search(
      term: $term
      searchType: $searchType
      filter: $filter
      sort: $sort
      startIndex: $startIndex
      endIndex: $endIndex
    ) {
      result {
        ... on Master {
          id
          title
          artist {
            id
            name
          }
          image
        }
      }
      totalResults
      filters {
        category
        name
        amount
      }
    }
  }
`;

const arrayify = (param) => (Array.isArray(param) ? param : [param]);

function ExploreMasters() {
  const queryString = useParams();
  const queryParam = qs.parse(queryString.query);
  const filters = {
    genre: arrayify(queryParam.genre),
    format: arrayify(queryParam.format),
    country: queryParam.country,
    year: arrayify(queryParam.year),
  };
  const variables = {
    term: queryParam.term,
    searchType: ["Master"],
    filter: filters,
    startIndex: (queryParam.page - 1) * queryParam.show_count,
    endIndex: queryParam.page * queryParam.show_count,
    sort: queryParam.sort,
  };
  const { data } = useQuery(SEARCH, { variables: variables });
  if (!data) return null;

  let selectedFilters = [
    queryParam.currency && {
      category: "Currency",
      text: filters.currency,
    },
    queryParam.cost_upper && {
      category: "Price Range",
      text: `${CURRENCY_SYMBOL[filters.currency]}${filters.costLower} to ${
        CURRENCY_SYMBOL[filters.currency]
      }${filters.costUpper}`,
    },
    queryParam.genre &&
      filters.genre.map((genre) => ({
        category: "Genre",
        text: GENRE_OPTIONS.find((option) => option.value === genre).text,
      })),
    queryParam.format &&
      filters.format.map((format) => ({
        category: "Format",
        text: FORMAT_OPTIONS.find((option) => option.value === format).text,
      })),
    queryParam.media_condition &&
      filters.mediaCondition.map((mediaCondition) => ({
        category: "Media Condition",
        text: CONDITION_OPTIONS.find(
          (option) => option.value === mediaCondition
        ).text,
      })),
    queryParam.sleeve_condition &&
      filters.sleeveCondition.map((sleeveCondition) => ({
        category: "Sleeve Condition",
        text: CONDITION_OPTIONS.find(
          (option) => option.value === sleeveCondition
        ).text,
      })),
    queryParam.year &&
      filters.year.map((year) => ({
        category: "Year",
        text: year,
      })),
  ]
    .flat(Infinity)
    .filter((filter) => filter != null);

  const availableFilters = data.search.filters.map((filter) => ({
    text: filter.name,
    value: filter.name,
    category: filter.category,
    count: filter.amount,
    custom: filter.custom,
  }));
  const categories = [
    {
      name: "GENRE",
      multi: true,
      custom: false,
    },
    {
      name: "FORMAT",
      multi: true,
      custom: false,
    },
    {
      name: "YEAR",
      multi: true,
      custom: false,
    },
  ];

  const items = data.search.result
    .filter((result) => result.__typename === "Master")
    .map((master) => (
      <ExploreItem
        item={{
          imgsrc: master.image[0],
          title: master.title,
          artist: master.artist[0].name,
          id: master.id
        }}
        type="master"
      />
    ));

  return (
    <>
      <div className="contained Explore">
        <Grid>
          <Grid.Column width={3}>
            <FilterSidebar
              categories={categories}
              filters={availableFilters}
              selectedFilters={selectedFilters}
              onFilterAdd={() => {}}
              onFilterRemove={() => {}}
            />
            <div style={{ marginLeft: "5px" }}>
              <Link>
                <Icon name="question circle" /> Help on Searching
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <ExploreTab activeItem="Master" searchTerm={queryParam.term}/>
            <PaginationTop
              amountOptions={amountOptions}
              sortOptions={sortOptions}
              listingAmount={queryParam.show_count}
              startIndex={variables.startIndex}
              endIndex={variables.endIndex}
              total={data.search.totalResults}
              sortOrder={queryParam.sort}
            />
            <Divider />
            <div className="ItemContainer">{items}</div>
            <Divider />
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default ExploreMasters;
