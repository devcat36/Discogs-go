import React from "react";
import { Item, Image, Table, Icon, Header } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

function CartItem({
  imgsrc,
  title,
  price,
  mediaCondition,
  sleeveCondition,
  id,
}) {
  return (
    <Table.Row>
      <Table.Cell>
        <Item.Group unstackable>
          <Item>
            <Item.Image size="tiny" src={imgsrc} />
            <Item.Content>
              <Item.Header as={"a"} className={"ItemHeader"}>
                <Link to={"/marketplace/item/" + id}>{title}</Link>
              </Item.Header>
              <Item.Meta>Media: {mediaCondition}</Item.Meta>
              <Item.Meta>Sleeve: {sleeveCondition}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </Table.Cell>
      <Table.Cell>
        <Header as={"h4"} color={"red"}>
          {price}
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Icon name={"trash alternate outline"} color={"grey"} />
      </Table.Cell>
    </Table.Row>
  );
}

export default CartItem;
