import React from "react";
import {Button, Divider, Grid, Header, Item, List, Table} from "semantic-ui-react";
import {Link} from "react-router-dom"
import ItemSidebar from "./ItemSidebar";

function MasterDescription(props) {
  return (
    <>
      <div className={'ItemDescription contained'}>
        <Grid divided>
          <Grid.Column width={11}>
            <div className={'Description'}>
              <Item.Group unstackable className={'ItemSpecs'}>
                <Item>
                  <Item.Image size={'small'}
                              src={'https://img.discogs.com/U2zKtmCbe57_Us8Z7DXxwL2mDfo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9102332-1474809687-6678.jpeg.jpg'}/>
                  <Item.Content>
                    <Item.Header>Die Kreuzen ‎– Cows And Beer</Item.Header>
                    <Item.Meta>
                      <div className={'Specs'}><span className={'SpecLabel'}>Genre:</span>Rock</div>
                      <div className={'Specs'}><span className={'SpecLabel'}>Style:</span>Hardcore, Punk</div>
                      <div className={'Specs'}><span className={'SpecLabel'}>Year:</span>2007</div>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
              <Header as={'h3'}>Tracklist</Header>
              <Divider/>
              <Table basic={'very'} unstackable>
                <Table.Row>
                  <Table.Cell>A1</Table.Cell>
                  <Table.Cell>Hate Me</Table.Cell>
                  <Table.Cell textAlign={'right'}>0:46</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>A2</Table.Cell>
                  <Table.Cell>Pain</Table.Cell>
                  <Table.Cell textAlign={'right'}>1:04</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>A3</Table.Cell>
                  <Table.Cell>Enemies</Table.Cell>
                  <Table.Cell textAlign={'right'}>0:56</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>B1</Table.Cell>
                  <Table.Cell>In School</Table.Cell>
                  <Table.Cell textAlign={'right'}>1:25</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>B2</Table.Cell>
                  <Table.Cell>Think For Me</Table.Cell>
                  <Table.Cell textAlign={'right'}>1:37</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>B3</Table.Cell>
                  <Table.Cell>Don't Say Please</Table.Cell>
                  <Table.Cell textAlign={'right'}>1:00</Table.Cell>
                </Table.Row>
              </Table>
              <Header as={'h3'}>Versions</Header>
              <Divider/>
              <Table basic={'very'} unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Title(Foramt)</Table.HeaderCell>
                    <Table.HeaderCell>Label</Table.HeaderCell>
                    <Table.HeaderCell>Cat#</Table.HeaderCell>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Cows And Beer ‎(7")</Table.Cell>
                    <Table.Cell>Version Sound</Table.Cell>
                    <Table.Cell>Dub 002</Table.Cell>
                    <Table.Cell>US</Table.Cell>
                    <Table.Cell>1983</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cows And Beer ‎(7",RP,Blu)</Table.Cell>
                    <Table.Cell>Version Sound</Table.Cell>
                    <Table.Cell>Dub 002</Table.Cell>
                    <Table.Cell>US</Table.Cell>
                    <Table.Cell>1983</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="ItemSidebar">
              <Header as={'h3'}>Master Release</Header>
              <Divider/>
              <Link>Edit Master Release</Link><br/>
              Data Correct
              <Header as={'h3'}>Marketplace</Header>
              <Divider/>
              <Button floated='left' style={{width:'48%'}} color='blue'>Vinyl and CD</Button>
              <Button floated='right' style={{width:'48%'}} fluid>Sell copy</Button>
            </div>
          </Grid.Column>
        </Grid>
      </div>

    </>
  );
}

export default MasterDescription;