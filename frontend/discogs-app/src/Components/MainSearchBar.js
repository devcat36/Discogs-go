import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import { gql, useLazyQuery } from '@apollo/client';
import '../styles/MainSearchBar.css';
import { CURRENCY_SYMBOL } from '../constants';

const SEARCH_QUERY = gql`
  query MainSearch($term: String!) {
    previewSearch(term: $term, length: 5) {
      __typename
      ... on Item {
        image
        release {
          title
          artist {
            name
          }
        }
        price {
          currency
          value
        }
      }
      __typename
      ... on Master {
        title
        image
        artist {
          name
        }
      }
      __typename
      ... on Artist {
        name
        image
      }
    }
  }
`;

const ARTIST_PLACEHOLDER = '/artist.png';
const ALBUM_PLACEHOLDER = '/album.png';

const resultFromResponse = (response) =>
  response.previewSearch.map((result) => {
    if (result.__typename === 'Master') {
      return {
        title: result.title,
        description: 'Master',
        image: typeof result.image === 'string' ? result.image : ALBUM_PLACEHOLDER,
        key: result.id,
      };
    } else if (result.__typename === 'Item') {
      return {
        title: result.release.title,
        description: 'Item',
        image: result.image.length > 0 ? result.image[0] : null,
        price: `${CURRENCY_SYMBOL[result.price.currency]} ${result.price.value.toFixed(2)}`,
        key: result.id,
      };
    } else if (result.__typename === 'Artist') {
      return {
        title: result.name,
        description: 'Artist',
        image: typeof result.image === 'string' ? result.image : ARTIST_PLACEHOLDER,
        key: result.id,
      };
    } else return null;
  });

function MainSearchBar() {
  const [result, setResults] = useState(null);
  const [getResult, { loading }] = useLazyQuery(SEARCH_QUERY, {
    onCompleted: (data) => setResults(resultFromResponse(data)),
  });
  return (
    <Search
      className="MainSearchBar"
      style={{ width: '100%' }}
      placeholder="Search artists, albums and more..."
      onSearchChange={(e, data) => {
        getResult({ variables: { term: data.value } });
      }}
      results={result}
      loading={loading}
    />
  );
}

export default MainSearchBar;
