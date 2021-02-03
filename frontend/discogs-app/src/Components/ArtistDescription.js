import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Item,
  Tab,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PaginationTop from "./PaginationTop";
import MasterDescription from "./MasterDescription";

const amountOptions = [
  { key: "5", text: "5", value: "5" },
  { key: "10", text: "10", value: "10" },
  { key: "25", text: "25", value: "25" },
  { key: "50", text: "50", value: "50" },
];

const sortOptions = [
  { key: "Title A-Z", text: "Title A-Z", value: "Title A-Z" },
  { key: "Title Z-A", text: "Title Z-A", value: "Title Z-A" },
  { key: "Label A-Z", text: "Label A-Z", value: "Label A-Z" },
  { key: "Label Z-A", text: "Label Z-A", value: "Label Z-A" },
  { key: "Year A-Z", text: "Year A-Z", value: "Year A-Z" },
  { key: "Year Z-A", text: "Year Z-A", value: "Year Z-A" },
];

const ARTIST_QUERY = gql`
  query ArtistDescription($id: ID!) {
    artist(id: $id) {
      id
      name
      image
      alias
      member
      profile
      homePage
      submissionNotes
      master {
        id
        title
        year
        image
      }
    }
  }
`;

function ArtistDescription() {
  const [listingAmount, setListingAmount] = useState("5");
  const [sortOrder, setSortOrder] = useState("Year A-Z");
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const { data } = useQuery(ARTIST_QUERY, { variables: { id: id } });
  if (!data) return null;

  return (
    <div className={"ItemDescription contained"}>
      <Grid divided>
        <Grid.Column width={11}>
          <div className={"Description"}>
            <Item.Group unstackable className={"ItemSpecs"}>
              <Item>
                <Item.Image
                  size={"small"}
                  style={{ width: "200px" }}
                  src={data.artist.image[0]}
                />
                <Item.Content>
                  <Item.Header>
                    <h2>{data.artist.name}</h2>
                  </Item.Header>
                  <div className="Specs" style={{ display: "flex" }}>
                    <div style={{ minWidth: "7em" }}>Profile:</div>
                    <div style={{ display: "block" }}>
                      <p>{data.artist.profile}</p>
                    </div>
                  </div>
                  <div className="Specs" style={{ display: "flex" }}>
                    <div style={{ minWidth: "7em" }}>Members:</div>
                    <div style={{ display: "block" }}>
                      <p>{data.artist.member.join(", ")}</p>
                    </div>
                  </div>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="ItemSidebar">
            <Header as={"h3"}>Artist</Header>
            <Divider />
            <Link>Edit Artist</Link>
            <br />
            <Header as={"h3"}>Marketplace</Header>
            <Divider />
            <Button floated="left" style={{ width: "48%" }} color="blue">
              Vinyl and CD
            </Button>
          </div>
        </Grid.Column>
      </Grid>
      <Header as={"h3"}>Discography</Header>
      <Divider />
      <PaginationTop
        amountOptions={amountOptions}
        sortOptions={sortOptions}
        listingAmount={listingAmount}
        sortOrder={sortOrder}
        onSortOrderChanged={() => {}}
        onListingAmountChanged={() => {}}
        startIndex={(page - 1) * listingAmount + 1}
        endIndex={page * listingAmount}
        total={data.artist.master.length}
      />
      <Table basic={"very"} unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Title</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.artist.master.map((master) => (
            <Table.Row>
              <Table.Cell style={{ width: "50px" }}>
                <img
                  style={{ width: "50px", display: "inline" }}
                  src={master.image[0]}
                />
              </Table.Cell>
              <Table.Cell>
                <Link>{master.title}</Link>
              </Table.Cell>
              <Table.Cell>{master.year}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ArtistDescription;
