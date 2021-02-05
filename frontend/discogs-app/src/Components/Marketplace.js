import React from "react";
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import qs from "query-string";
import FilterSidebar from "./FilterSidebar";
import ItemList from "./ItemList";
import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  CONDITION_OPTIONS,
  CURRENCY_SYMBOL,
  FORMAT_OPTIONS,
  GENRE_OPTIONS,
} from "../constants";

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
        ... on Item {
          id
          image
          price {
            currency
            value
          }
          shipping {
            currency
            value
          }
          mediaCondition
          sleeveCondition
          comments
          seller {
            id
            userName
            sellerSettings {
              country
            }
          }
          release {
            id
            image
            title
            artist {
              name
            }
            format
            formatSpec {
              kind
              value
            }
          }
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

function Marketplace() {
  const history = useHistory();
  const queryString = useParams();
  const queryParam = qs.parse(queryString.query);
  const filters = {
    currency: queryParam.currency,
    price: queryParam.price,
    genre: arrayify(queryParam.genre),
    format: arrayify(queryParam.format),
    mediaCondition: arrayify(queryParam.media_condition),
    sleeveCondition: arrayify(queryParam.sleeve_condition),
    year: arrayify(queryParam.year),
  };
  const variables = {
    term: queryParam.term,
    searchType: ["Item"],
    filter: filters,
    startIndex: (queryParam.page - 1) * queryParam.show_count + 1,
    endIndex: queryParam.page * queryParam.show_count,
    sort: queryParam.sort,
  };
  const { data } = useQuery(SEARCH, { variables });
  if (!data) return null;

  let selectedFilters = [
    queryParam.currency && {
      category: "Currency",
      value: filters.currency,
      text: filters.currency,
    },
    queryParam.price && {
      category: "Price",
      value: filters.price,
      text: `${CURRENCY_SYMBOL[filters.currency]}${
        filters.price.split("to")[0]
      } to ${CURRENCY_SYMBOL[filters.currency]}${filters.price.split("to")[1]}`,
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
        text: FORMAT_OPTIONS.find((option) => option.value === format).text,
        value: FORMAT_OPTIONS.find((option) => option.value === format).value,
      })),
    queryParam.media_condition &&
      filters.mediaCondition.map((mediaCondition) => ({
        category: "Media Condition",
        value: CONDITION_OPTIONS.find(
          (option) => option.value === mediaCondition
        ).value,
        text: CONDITION_OPTIONS.find(
          (option) => option.value === mediaCondition
        ).text,
      })),
    queryParam.sleeve_condition &&
      filters.sleeveCondition.map((sleeveCondition) => ({
        category: "Sleeve Condition",
        value: CONDITION_OPTIONS.find(
          (option) => option.value === sleeveCondition
        ).value,
        text: CONDITION_OPTIONS.find(
          (option) => option.value === sleeveCondition
        ).text,
      })),
    queryParam.year &&
      filters.year.map((year) => ({
        category: "Year",
        value: year,
      })),
  ]
    .flat(Infinity)
    .filter((filter) => filter != null);

  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterSidebar
            categories={[
              ...new Set(data.search.filters.map((filter) => filter.category)),
            ].map((category) => ({ name: category }))}
            filters={data.search.filters.map((filter) => ({
              text: filter.name,
              value: filter.name,
              category: filter.category,
              count: filter.amount,
              custom: filter.custom,
            }))}
            selectedFilters={selectedFilters}
            onFilterAdd={(filter) => {
              history.push(
                qs.stringify({
                  ...queryParam,
                  [filter.category.toLowerCase().replace(" ", "_")]: arrayify(
                    queryParam[filter.category.toLowerCase().replace(" ", "_")]
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
                  ).filter((selectedFilter) => selectedFilter != filter.value),
                })
              );
            }}
          />
        </Grid.Column>
        <Grid.Column width={13}>
          {data.search.result.filter((result) => result.__typename === "Item")
            .length > 0 ? (
            <ItemList
              items={data.search.result.filter(
                (result) => result.__typename === "Item"
              )}
              total={data.search.totalResults}
              page={queryParam.page}
              showCount={Number(queryParam.show_count)}
              sortOrder={queryParam.sort}
              onPageSelected={(page) => {
                history.push(qs.stringify({ ...queryParam, page }));
              }}
              onSortOrderSelected={(order) => {
                history.push(
                  qs.stringify({ ...queryParam, sort: order.value })
                );
              }}
              onShowCountSelected={(count) => {
                history.push(
                  qs.stringify({ ...queryParam, show_count: count.value })
                );
              }}
            />
          ) : (
            <span>No Result</span>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Marketplace;
