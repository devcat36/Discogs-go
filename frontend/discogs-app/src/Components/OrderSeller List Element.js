import React from "react";
import {Table, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

function OrderSellerListElement({order}){
  return(
    <Table.Row>
      <Table.Cell textAlign={'center'}>
        <Link to={'/sell/order'}>{order.number}</Link>
      </Table.Cell>
      <Table.Cell>
        {order.summary.map(item=>
          <><Link to={'/sell/item'}>{item}</Link><br/></>
        )}
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        <Link>{order.buyer}</Link>
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        <Header as={'h5'}>{order.total}</Header>
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        <Header as={'h5'}>{order.fee}</Header>
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        {order.date}<br/>{order.time}
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        {order.lastDate}<br/>{order.lastTime}
      </Table.Cell>
      <Table.Cell textAlign={'center'}>
        {order.status}
      </Table.Cell>
    </Table.Row>
  );
}

export default OrderSellerListElement;