import React from 'react';
import { Divider, Grid, Icon } from 'semantic-ui-react';
import ExploreTab from './ExploreTab';
import PaginationTop from './PaginationTop';
import ExploreItem from './ExploreItem';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import qs from 'query-string';
import PaginationMenu from './PaginationMenu';
const amountOptions = [
  { key: '25', text: '25', value: '25' },
  { key: '50', text: '50', value: '50' },
  { key: '100', text: '100', value: '100' },
  { key: '200', text: '200', value: '200' },
];

const sortOptions = [
  {
    key: 'Latest Additions',
    text: 'Latest Additions',
    value: 'Latest Additions',
  },
  { key: 'Latest Edits', text: 'Latest Edits', value: 'Latest Edits' },
  { key: 'Title, A-Z', text: 'Title, A-Z', value: 'Title, A-Z' },
  { key: 'Title, Z-A', text: 'Title, Z-A', value: 'Title, Z-A' },
];

const dummyItems = [
  {
    imgsrc:
      'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
];

const SEARCH = gql`
  query Search(
    $term: String!
    $searchType: String!
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
  const history = useHistory();
  const queryString = useParams();
  const queryParam = qs.parse(queryString.query);
  const variables = {
    term: queryParam.term,
    searchType: 'Artist',
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
            <div style={{ marginLeft: '5px' }}>
              <Link>
                <Icon name="question circle" /> Help on Searching
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <ExploreTab
              activeItem="Artist"
              searchTerm={queryParam.term}
              query={queryString.query}
            />
            <PaginationTop
              amountOptions={amountOptions}
              sortOptions={sortOptions}
              listingAmount={queryParam.show_count}
              startIndex={
                data.search.result.filter((result) => result.__typename === 'Artist').length
                  ? variables.startIndex + 1
                  : 0
              }
              endIndex={
                variables.startIndex +
                data.search.result.filter((result) => result.__typename === 'Artist').length
              }
              total={data.search.totalResults}
              sortOrder={queryParam.sort}
              onSortOrderChanged={(order) => {
                history.push(qs.stringify({ ...queryParam, sort: order.value }));
              }}
              onListingAmountChanged={(count) => {
                history.push(qs.stringify({ ...queryParam, show_count: count.value }));
              }}
            />
            <Divider />
            <div className="ItemContainer">
              {data.search.result
                .filter((result) => result.__typename === 'Artist')
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
            <PaginationMenu
              onPageSelected={(page) => history.push(qs.stringify({ ...queryParam, page }))}
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

export default ExploreArtists;
