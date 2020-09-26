import React from "react";
import {Button, Divider, Grid, Header, Item, List, Table} from "semantic-ui-react"
import {Link} from "react-router-dom"
import PaginationTop from "./PaginationTop";

const amountOptions = [
  {key: '25', text: '25', value: '25'},
  {key: '50', text: '50', value: '50'},
  {key: '100', text: '100', value: '100'},
  {key: '200', text: '200', value: '200'}
];

const sortOptions = [
  {key: 'Title A-Z', text: 'Title A-Z', value: 'Title A-Z'},
  {key: 'Title Z-A', text: 'Title Z-A', value: 'Title Z-A'},
  {key: 'Label A-Z', text: 'Label A-Z', value: 'Label A-Z'},
  {key: 'Label Z-A', text: 'Label Z-A', value: 'Label Z-A'},
  {key: 'Year A-Z', text: 'Year A-Z', value: 'Year A-Z'},
  {key: 'Year Z-A', text: 'Year Z-A', value: 'Year Z-A'},
];

function ArtistDescription() {
  return (
    <div className={'ItemDescription contained'}>
      <Grid divided>
        <Grid.Column width={11}>
          <div className={'Description'}>
            <Item.Group unstackable className={'ItemSpecs'}>
              <Item>
                <Item.Image size={'small'}
                            style={{width: '200px'}}
                            src={'https://img.discogs.com/ETnp4-noE6BZ1VbFd9aE8_1BlyE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-261736-1107701759.jpg.jpg'}/>
                <Item.Content>
                  <Item.Header><h2>Die Kreuzen</h2></Item.Header>
                  <div className="Specs" style={{display: 'flex'}}>
                    <div style={{minWidth: '7em'}}>Profile:</div>
                    <div style={{display: 'block'}}><p>Proto-grunge/hardcore/noise quartet from Milwaukee, which was
                      formed in 1981 and broke up in the early 1992. Members were also involved in a number of other
                      groups, including Chainfall, Carnival Strippers, Crime And Judy, Fuckface, Decapitado, Impact
                      Test, War On The Saints and Wreck (2).</p></div>
                  </div>
                  <div className="Specs" style={{display: 'flex'}}>
                    <div style={{minWidth: '7em'}}>Members:</div>
                    <div style={{display: 'block'}}><p>Brian Egeness, Dan Kubinski, Erik Tunison, Herman Egeness, Jay
                      Tiller, Keith Brammer</p></div>
                  </div>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="ItemSidebar">
            <Header as={'h3'}>Artist</Header>
            <Divider/>
            <Link>Edit Artist</Link><br/>
            <Header as={'h3'}>Marketplace</Header>
            <Divider/>
            <Button floated="left" style={{width: '48%'}} color="blue">Vinyl and CD</Button>
          </div>
        </Grid.Column>
      </Grid>
      <Header as={'h3'}>Discography</Header>
      <Divider/>
      <PaginationTop
        amountOptions={amountOptions}
        sortOptions={sortOptions}
      />
      <Table basic={'very'} unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Title</Table.HeaderCell>
            <Table.HeaderCell>Release</Table.HeaderCell>
            <Table.HeaderCell>Label</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={{width: '50px'}}>
              <img style={{width: '50px', display: 'inline'}}
                   src="https://img.discogs.com/_ltz5VuUuu5X1bxQz-OBTYN2UBY=/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12170508-1529708807-1663.jpeg.jpg"/>
            </Table.Cell>
            <Table.Cell textAlign="left">
              <Link>Starship Demo</Link>
            </Table.Cell>
            <Table.Cell>Album</Table.Cell>
            <Table.Cell>Not on Label</Table.Cell>
            <Table.Cell>1981</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{width: '50px'}}>
              <img style={{width: '50px', display: 'inline'}}
                   src="https://img.discogs.com/uMio3PkEvrJqTqn5nSTr4M_Msz8=/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3061218-1430175481-1465.jpeg.jpg"/>
            </Table.Cell>
            <Table.Cell textAlign="left">
              <Link>Cow And Beer</Link>
            </Table.Cell>
            <Table.Cell>EP</Table.Cell>
            <Table.Cell>Version Sound</Table.Cell>
            <Table.Cell>1983</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default ArtistDescription;