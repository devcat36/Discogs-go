import React from "react";
import {Table, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

function OrderListElement({order}){
  return(
    <Table.Row>
      <Table.Cell textAlign={'center'}>
        <Link>{order.number}</Link>
      </Table.Cell>
      <Table.Cell>
        {order.summary.map(item=>
          <><Link to={'/sell/item'}>{item}</Link><br/></>
        )}
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        <Link>{order.seller}</Link>
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        <Header as={'h5'} color={'red'}>{order.total}</Header>
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        {order.date}<br/>{order.time}
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        {order.status}
      </Table.Cell>
    </Table.Row>
  );
}

export default OrderListElement;