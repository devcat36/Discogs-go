import React from 'react';
import { Table } from 'semantic-ui-react';
import { CONDITION_OPTIONS, getTextWithValueInOptions } from '../../constants';
import CartItem from './CartItem';

export default function CartItemTable({ items }) {
  const CartItems = items.map((item) => (
    <CartItem
      key={item.id}
      imgsrc={item.image[0]}
      title={`
            ${item.release.artist[0].name} - 
            ${item.release.title} (
            ${item.release.format}, 
            ${item.release.formatSpec.map((spec) => spec.value).join(', ')})
          `}
      mediaCondition={getTextWithValueInOptions(item.mediaCondition, CONDITION_OPTIONS)}
      sleeveCondition={getTextWithValueInOptions(item.sleeveCondition, CONDITION_OPTIONS)}
      id={item.id}
    />
  ));

  return (
    <Table basic="very'" unstackable>
      <Table.Body>{CartItems}</Table.Body>
    </Table>
  );
}
