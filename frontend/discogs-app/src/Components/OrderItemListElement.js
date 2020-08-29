import React from "react";
import {Table, Item, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

function OrderItemListElement({item}) {
  return(
    <Table.Row>
      <Table.Cell>
        {item.id}
      </Table.Cell>
      <Table.Cell>
        <Item.Group unstackable><Item>
          <Item.Image size='tiny' src={item.imgsrc}/>
          <Item.Content>
            <Header as='h5'><Link to={'/sell/item'}>{item.title}</Link></Header>
            <Item.Meta>Media Condition: {item.mediaCondition}</Item.Meta>
            <Item.Meta>Sleeve Condition: {item.sleeveCondition}</Item.Meta>
            {/*<Item.Meta>{item.comment}</Item.Meta>*/}
          </Item.Content>
        </Item></Item.Group>
      </Table.Cell>
      <Table.Cell textAlign='right'>{item.price}</Table.Cell>
    </Table.Row>
  );
}

export default OrderItemListElement;