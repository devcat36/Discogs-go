import React from "react";
import {Grid, Item, Header, Divider, Table} from 'semantic-ui-react';
import {useParams} from "react-router-dom";
import {useQuery, gql} from '@apollo/client';
import ItemSidebar from "./ItemSidebar";
import {GENRE_OPTIONS, FORMAT_OPTIONS, COUNTRY_OPTIONS, toHHMMSS} from "../constants";

const ITEM_QUERY = gql`
  query ItemDescription($id: ID!){
    item(id: $id){
      image
      comments
      release{
        id
        image
        trackList{
          pos
          title
          duration
        }
        title
        artist{
          name
        }
        format
        formatSpec{
          value
        }
        country
        genre
        year
      }
      price{
        currency
        value
      }
      shipping{
        currency
        value
      }
      mediaCondition
      sleeveCondition
      seller{
        id
        userName
        sellerSettings{
          sellerTerm
          country
          paymentMethods
        }
      }
      notes
    }
  }
`;

const image_placeholder = '';

function ItemDescription() {
  const {id} = useParams();
  const {data} = useQuery(ITEM_QUERY, {variables: {id: id}});
  if(!data) return null;
  return (
    <div className={'ItemDescription contained'}>
      <Grid divided>
        <Grid.Column width={11}>
          <div className={'Description'}>
            <Item.Group unstackable className={'ItemSpecs'}>
              <Item>
                <Item.Image size={'small'}
                            src={data && (data.item.image.length > 0 ? data.item.image : data.item.release.image.length > 0 ? data.item.release.image[0] : image_placeholder)}/>
                <Item.Content>
                  <Item.Header>{data && (data.item.release.artist.length > 1 ? 'Various Artists' : data.item.release.artist[0].name)} - {data && data.item.release.title}</Item.Header>
                  <Item.Meta>
                    <div className={'Specs'}><span className={'SpecLabel'}>Format:</span>
                      {data && FORMAT_OPTIONS.find(option => option.value === data.item.release.format).text}
                      {data && data.item.release.formatSpec.map(spec => ` ${spec.value}`)}
                    </div>
                    <div className={'Specs'}><span
                      className={'SpecLabel'}>Country:</span>
                      {data && COUNTRY_OPTIONS.find(option => option.value === data.item.release.country).text}
                    </div>
                    <div className={'Specs'}><span className={'SpecLabel'}>Released:</span>
                      {data && data.item.release.year}</div>
                    <div className={'Specs'}>
                      <span className={'SpecLabel'}>Genre:</span>
                      {data && data.item.release.genre.map(genre => GENRE_OPTIONS.find(option => option.value === genre).text + ' ')}
                    </div>
                  </Item.Meta>
                </Item.Content>
              </Item>
            </Item.Group>
            <Header as={'h3'}>Tracklist</Header>
            <Divider/>
            <Table basic={'very'} unstackable>
              {data && data.item.release.trackList.map(track =>
                <Table.Row>
                  <Table.Cell>{track.pos}</Table.Cell>
                  <Table.Cell>{track.title}</Table.Cell>
                  {track.duration && <Table.Cell textAlign="right">{toHHMMSS(track.duration%500)}</Table.Cell>}
                </Table.Row>
              )}
            </Table>
            <Header as={'h3'}>Notes</Header>
            <Divider/>
            <p>{data && data.item.notes}</p>
            <Header as={'h3'}>Seller Terms</Header>
            <Divider/>
            <p>{data && data.item.seller.sellerSettings.sellerTerm}</p>
          </div>
        </Grid.Column>
        <Grid.Column width={5}>
          <ItemSidebar data={data}/>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ItemDescription