import React from "react";
import {Item, Image, Table, Icon, Header} from "semantic-ui-react";
import {Link, useHistory} from 'react-router-dom';
import "./Cart.css";

function CartItem(props) {
  return (
    <Table.Row>
      <Table.Cell>
        <Item.Group><Item>
          <Item.Image size="tiny" src={props.imgsrc}/>
          <Item.Content>
            <Item.Header as={'a'} className={'ItemHeader'}>
              <Link>{props.title}</Link>
            </Item.Header>
            <Item.Meta>Media: {props.mediaCondition}</Item.Meta>
            <Item.Meta>Sleeve: {props.sleeveCondition}</Item.Meta>
          </Item.Content>
        </Item></Item.Group>
      </Table.Cell>
      <Table.Cell>
        <Header as={'h4'} color={'red'}>{props.price}</Header>
      </Table.Cell>
      <Table.Cell>
        <Icon name={'trash alternate outline'} color={'grey'}/>
      </Table.Cell>
    </Table.Row>
  );
}

export default CartItem;