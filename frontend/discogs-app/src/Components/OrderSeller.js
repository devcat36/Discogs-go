import React from "react";
import ManageTab from "./ManageTab";
import PaginationTop from "./PaginationTop";
import {Divider, Table} from "semantic-ui-react";
import OrderSellerListElement from "./OrderSeller List Element";

const amountOptions = [
  {key: '25', text: '25', value: '25'},
  {key: '50', text: '50', value: '50'},
  {key: '100', text: '100', value: '100'},
  {key: '200', text: '200', value: '200'}
];

const sortOptions = [
  {key: 'Order Number', text: 'Order Number', value: 'Order Number'},
  {key: 'Buyer', text: 'Buyer', value: 'Buyer'},
  {key: 'Date', text: 'Date', value: 'Date'},
  {key: 'Last Activity', text: 'Last Activity', value: 'Last Activity'},
  {key: 'Status', text: 'Status', value: 'Status'}
];

const dummyOrders=[{
  number: '891327-250',
  summary: ['The Alan Parsons Project - Eye In The Sky (LP, Album, Club, CRC)',
    'Serge Gainsbourg & Jane Birkin - Jane Birkin - Serge Gainsbourg (LP, Album, RE)'],
  buyer: 'sezdaz',
  total: '$28.00',
  fee: '$2.80',
  date: '22-Aug-20',
  time: '02:28 AM',
  lastDate: '22-Aug-29',
  lastTime: '10:16 PM',
  status: 'Invoice Received'
}];

function OrderSeller() {
  return (
    <div className="contained">
      <ManageTab activeItem="Orders"/>
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
            <Table.HeaderCell>Buyer</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Fee</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Last Activity</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {dummyOrders.map(order=><OrderSellerListElement order={order}/>)}
      </Table>
    </div>
  );
}

export default OrderSeller;