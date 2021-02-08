import React from "react";
import { Divider, Grid, Icon, Menu, Table } from "semantic-ui-react";
import FilterSidebar from "./FilterSidebar";
import ExploreTab from "./ExploreTab";
import PaginationTop from "./PaginationTop";
import ExploreItem from "./ExploreItem";
import PaginationMenu from "./PaginationMenu";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import qs from "query-string";
import {
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
  const history = useHistory();
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
      value: filters.currency,
      text: filters.currency,
    },
    queryParam.genre &&
      filters.genre.map((genre) => ({
        category: "Genre",
        value: GENRE_OPTIONS.find((option) => option.value === genre).value,
        text: GENRE_OPTIONS.find((option) => option.value === genre).text,
      })),
    queryParam.format &&
      filters.format.map((format) => ({
        category: "Format",
        value: FORMAT_OPTIONS.find((option) => option.value === format).value,
        text: FORMAT_OPTIONS.find((option) => option.value === format).text,
      })),
    queryParam.year &&
      filters.year.map((year) => ({
        category: "Year",
        value: year,
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

  const items = data.search.result
    .filter((result) => result.__typename === "Master")
    .map((master) => (
      <ExploreItem
        key={master.id}
        item={{
          imgsrc: master.image[0],
          title: master.title,
          artist: master.artist[0].name,
          id: master.id,
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
              categories={[
                ...new Set(
                  data.search.filters.map((filter) => filter.category)
                ),
              ].map((category) => ({ name: category }))}
              filters={availableFilters}
              selectedFilters={selectedFilters}
              onFilterAdd={(filter) => {
                history.push(
                  qs.stringify({
                    ...queryParam,
                    [filter.category.toLowerCase().replace(" ", "_")]: arrayify(
                      queryParam[
                        filter.category.toLowerCase().replace(" ", "_")
                      ]
                    ).concat(filter.value),
                  })
                );
              }}
              onFilterRemove={(filter) => {
                history.push(
                  qs.stringify({
                    ...queryParam,
                    [filter.category.toLowerCase()]: arrayify(
                      queryParam[filter.category.toLowerCase()]
                    ).filter(
                      (selectedFilter) => selectedFilter != filter.value
                    ),
                  })
                );
              }}
            />
            <div style={{ marginLeft: "5px" }}>
              <Link to="#">
                <Icon name="question circle" /> Help on Searching
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <ExploreTab
              activeItem="Master"
              searchTerm={queryParam.term}
              query={queryString.query}
            />
            <PaginationTop
              amountOptions={amountOptions}
              sortOptions={sortOptions}
              listingAmount={queryParam.show_count}
              startIndex={
                data.search.result.filter(
                  (result) => result.__typename === "Master"
                ).length
                  ? variables.startIndex + 1
                  : 0
              }
              endIndex={
                variables.startIndex +
                data.search.result.filter(
                  (result) => result.__typename === "Master"
                ).length
              }
              total={data.search.totalResults}
              sortOrder={queryParam.sort}
              onSortOrderChanged={(order) => {
                history.push(
                  qs.stringify({ ...queryParam, sort: order.value })
                );
              }}
              onListingAmountChanged={(count) => {
                history.push(
                  qs.stringify({ ...queryParam, show_count: count.value })
                );
              }}
            />
            <Divider />
            <div className="ItemContainer">{items}</div>
            <Divider />
            <PaginationMenu
              onPageSelected={(page) =>
                history.push(qs.stringify({ ...queryParam, page }))
              }
              page={queryParam.page}
              itemLength={data.search.totalResults}
              listingAmount={queryParam.show_count}
              maxLength={6}
            />
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default ExploreMasters;
