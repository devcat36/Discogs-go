import React from "react";
import { Divider, Grid, Icon, Menu } from "semantic-ui-react";
import ExploreTab from "./ExploreTab";
import PaginationTop from "./PaginationTop";
import ExploreItem from "./ExploreItem";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import qs from "query-string";
const amountOptions = [
  { key: "25", text: "25", value: "25" },
  { key: "50", text: "50", value: "50" },
  { key: "100", text: "100", value: "100" },
  { key: "200", text: "200", value: "200" },
];

const sortOptions = [
  {
    key: "Latest Additions",
    text: "Latest Additions",
    value: "Latest Additions",
  },
  { key: "Latest Edits", text: "Latest Edits", value: "Latest Edits" },
  { key: "Title, A-Z", text: "Title, A-Z", value: "Title, A-Z" },
  { key: "Title, Z-A", text: "Title, Z-A", value: "Title, Z-A" },
];

const dummyItems = [
  {
    imgsrc:
      "https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg",
    title: "Dire Straits",
  },
];

const SEARCH = gql`
  query Search(
    $term: String!
    $searchType: [String!]
    $sort: String
    $startIndex: Int
    $endIndex: Int
  ) {
    search(
      term: $term
      searchType: $searchType
      sort: $sort
      startIndex: $startIndex
      endIndex: $endIndex
    ) {
      result {
        ... on Artist {
          id
          name
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

function ExploreArtists() {
  const queryString = useParams();
  const queryParam = qs.parse(queryString.query);
  const variables = {
    term: queryParam.term,
    searchType: ["Artist"],
    filter: null,
    startIndex: (queryParam.page - 1) * queryParam.show_count,
    endIndex: queryParam.page * queryParam.show_count,
    sort: queryParam.sort,
  };
  const { data } = useQuery(SEARCH, { variables: variables });
  if (!data) return null;

  return (
    <>
      <div className="contained Explore">
        <Grid>
          <Grid.Column width={3}>
            <div style={{ marginLeft: "5px" }}>
              <Link>
                <Icon name="question circle" /> Help on Searching
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <ExploreTab activeItem="Artist" />
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
            <div className="ItemContainer">
              {data.search.result
                .filter((result) => result.__typename === "Artist")
                .map((artist) => (
                  <ExploreItem
                    item={{
                      imgsrc: artist.image[0],
                      title: artist.name,
                      id: artist.id,
                    }}
                    type="artist"
                  />
                ))}
            </div>
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

export default ExploreArtists;
