import React from "react";
import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import qs from "query-string";
import FilterSidebar from "./FilterSidebar";
import ItemList from "./ItemList";
import { gql, useQuery } from "@apollo/client";
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
  const queryString = useParams();
  const queryParam = qs.parse(queryString.query);
  const filters = {
    currency: queryParam.currency,
    costLower: queryParam.cost_lower
      ? queryParam.cost_lower
      : queryParam.cost_upper
      ? 0
      : null,
    costUpper: queryParam.cost_upper,
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

  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterSidebar
            categories={[
              ...new Set(
                data.search.filters.map((filter) => ({ name: filter.category }))
              ),
            ]}
            filters={data.search.filters.map((filter) => ({
              text: filter.name,
              value: filter.name,
              category: filter.category,
              count: filter.amount,
              custom: filter.custom,
            }))}
            selectedFilters={selectedFilters}
            onFilterAdd={() => {}}
            onFilterRemove={() => {}}
          />
        </Grid.Column>
        <Grid.Column width={13}>
          <ItemList
            items={data.search.result.filter(
              (result) => result.__typename === "Item"
            )}
            total={data.search.totalResults}
            startIndex={variables.startIndex}
            endIndex={variables.endIndex}
            showCount={Number(queryParam.show_count)}
            sortOrder={queryParam.sort}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Marketplace;
