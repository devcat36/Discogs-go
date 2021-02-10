import React from "react";
import { Button, Divider, Grid, Header, Item, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { COUNTRY_OPTIONS, GENRE_OPTIONS } from "../constants";

const MASTER_QUERY = gql`
  query MasterDescription($id: ID!) {
    master(id: $id) {
      id
      title
      artist {
        id
        name
      }
      image
      genre
      year
      notes
      keyRelease {
        trackList {
          pos
          title
          duration
        }
      }
      release {
        id
        title
        format
        formatSpec {
          value
        }
        country
        year
      }
    }
  }
`;

function MasterDescription() {
  const { id } = useParams();
  const { data } = useQuery(MASTER_QUERY, { variables: { id } });
  if (!data) return null;
  return (
    <>
      <div className={"ItemDescription contained"}>
        <Grid divided>
          <Grid.Column width={11}>
            <div className={"Description"}>
              <Item.Group unstackable className={"ItemSpecs"}>
                <Item>
                  <Item.Image size={"small"} src={data.master.image[0]} />
                  <Item.Content>
                    <Item.Header>
                      {data.master.artist[0].name} ‎– {data.master.title}
                    </Item.Header>
                    <Item.Meta>
                      <div className={"Specs"}>
                        <span className={"SpecLabel"}>Genre:</span>
                        {data.master.genre
                          .map(
                            (genre) =>
                              GENRE_OPTIONS.find((opt) => opt.value == genre)
                                .text
                          )
                          .join(", ")}
                      </div>
                      <div className={"Specs"}>
                        <span className={"SpecLabel"}>Year:</span>
                        {data.master.year}
                      </div>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
              <Header as={"h3"}>Tracklist</Header>
              <Divider />
              <Table basic={"very"} unstackable>
                {data.master.keyRelease.trackList.map((track) => (
                  <Table.Row>
                    <Table.Cell>{track.pos}</Table.Cell>
                    <Table.Cell>{track.title}</Table.Cell>
                    <Table.Cell textAlign={"right"}>
                      {track.duration}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table>
              <Header as={"h3"}>Versions</Header>
              <Divider />
              <Table basic={"very"} unstackable>
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
                  {data.master.release.map((release) => (
                    <Table.Row>
                      <Table.Cell>
                        {release.title} (
                        {release.formatSpec.map((spec) => spec.value).join(",")}
                        )
                      </Table.Cell>
                      <Table.Cell> </Table.Cell>
                      <Table.Cell> </Table.Cell>
                      <Table.Cell>
                        {
                          COUNTRY_OPTIONS.find(
                            (opt) => opt.value == release.country
                          ).text
                        }
                      </Table.Cell>
                      <Table.Cell>{release.year}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="ItemSidebar">
              <Header as={"h3"}>Master Release</Header>
              <Divider />
              <Link>Edit Master Release</Link>
              <br />
              Data Correct
              <Header as={"h3"}>Marketplace</Header>
              <Divider />
              <Button floated="left" style={{ width: "48%" }} color="blue">
                Vinyl and CD
              </Button>
              <Button floated="right" style={{ width: "48%" }} fluid>
                Sell copy
              </Button>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
}

export default MasterDescription;
