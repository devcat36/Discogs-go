import {
  Button,
  Divider,
  Grid,
  Header,
  Item,
  List,
  Table,
} from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { COUNTRY_OPTIONS, FORMAT_OPTIONS, GENRE_OPTIONS } from "../constants";

const RELEASE_QUERY = gql`
  query ReleaseDescription($id: ID!) {
    release(id: $id) {
      id
      image
      artist {
        id
        name
      }
      title
      format
      formatSpec {
        kind
        value
      }
      country
      year
      genre
      trackList {
        pos
        artist {
          id
          name
        }
        title
        duration
      }
      notes
      submissionNotes
      releaseDate {
        year
        month
        day
      }
      master {
        id
      }
    }
  }
`;

function ReleaseDescription() {
  const { id } = useParams();
  const { data } = useQuery(RELEASE_QUERY, { variables: { id } });
  if (!data) return null;
  return (
    <div className={"ItemDescription contained"}>
      <Grid divided>
        <Grid.Column width={11}>
          <div className={"Description"}>
            <Item.Group unstackable className={"ItemSpecs"}>
              <Item>
                <Item.Image size={"small"} src={data.release.image[0]} />
                <Item.Content>
                  <Item.Header>
                    {data.release.artist[0].name} ‎– {data.release.title}
                  </Item.Header>
                  <Item.Meta>
                    <div className={"Specs"}>
                      <span className={"SpecLabel"}>Format:</span>
                      {
                        FORMAT_OPTIONS.find(
                          (opt) => opt.value == data.release.format
                        ).text
                      }
                      {", "}
                      {data.release.formatSpec.map((fs) => fs.value).join(", ")}
                    </div>
                    <div className={"Specs"}>
                      <span className={"SpecLabel"}>Country:</span>
                      {
                        COUNTRY_OPTIONS.find(
                          (opt) => opt.value == data.release.country
                        ).text
                      }
                    </div>
                    <div className={"Specs"}>
                      <span className={"SpecLabel"}>Released:</span>
                      {data.release.year}
                    </div>
                    <div className={"Specs"}>
                      <span className={"SpecLabel"}>Genre:</span>
                      {data.release.genre
                        .map(
                          (genre) =>
                            GENRE_OPTIONS.find((opt) => opt.value == genre).text
                        )
                        .join(", ")}
                    </div>
                  </Item.Meta>
                </Item.Content>
              </Item>
            </Item.Group>
            <Header as={"h3"}>Tracklist</Header>
            <Divider />
            <Table basic={"very"} unstackable>
              {data.release.trackList.map((track) => (
                <Table.Row>
                  <Table.Cell>{track.pos}</Table.Cell>
                  <Table.Cell>{track.title}</Table.Cell>
                  <Table.Cell textAlign={"right"}>{track.duration}</Table.Cell>
                </Table.Row>
              ))}
            </Table>
            <Header as={"h3"}>Notes</Header>
            <Divider />
            <p>{data.release.notes}</p>
          </div>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="ItemSidebar">
            <Header as={"h3"}>Release</Header>
            <Divider />
            <Link>Edit Release</Link>
            <br />
            <Link to={`/explore/master/${data.release.master.id}`}>All Versions of this Release</Link>
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
  );
}

export default ReleaseDescription;
