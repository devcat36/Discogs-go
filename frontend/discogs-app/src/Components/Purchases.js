import React from "react";
import {Header, Table, Dropdown, Divider, Button, Segment} from "semantic-ui-react";
import {Link, useHistory} from 'react-router-dom';
import MarketplaceTab from "./MarketplaceTab";
import PaginationTop from "./PaginationTop";
import OrderListElement from "./OrderListElement";

const amountOptions = [
  {key: '25', text: '25', value: '25'},
  {key: '50', text: '50', value: '50'},
  {key: '100', text: '100', value: '100'},
  {key: '200', text: '200', value: '200'}
];

const sortOptions = [
  {key: 'Order Number', text: 'Order Number', value: 'Order Number'},
  {key: 'Seller', text: 'Seller', value: 'Seller'},
  {key: 'Date', text: 'Date', value: 'Date'},
  {key: 'Status', text: 'Status', value: 'Status'}
];

const dummyOrder={
  number: '891327-250',
  summary: ['The Alan Parsons Project - Eye In The Sky (LP, Album, Club, CRC)',
    'Serge Gainsbourg & Jane Birkin - Jane Birkin - Serge Gainsbourg (LP, Album, RE)'],
  seller: 'Franzson',
  total: '$28.00',
  date: '22-Aug-20',
  time: '02:28 AM',
  status: 'Invoice Sent'
};

function Purchases() {
  return (
    <>
      <MarketplaceTab activeItem={'Purchases'}/>
      <Link>1 Purchase Awaiting Feedback</Link>
      <PaginationTop
        amountOptions={amountOptions}
        sortOptions={sortOptions}
      />
      <Divider/>
      <Table unstackable>
        <Table.Header>
          <Table.Row textAlign={'center'}>
            <Table.HeaderCell>Order#</Table.HeaderCell>
            <Table.HeaderCell>Summary</Table.HeaderCell>
            <Table.HeaderCell>Seller</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <OrderListElement order={dummyOrder}/>
      </Table>
    </>
  );
}

export default Purchases;