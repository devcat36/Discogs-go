import React from 'react';
import { Divider } from 'semantic-ui-react';
import { CURRENCY_SYMBOL } from '../../constants';

export default function CostTables({ order }) {
  return (
    <>
      <table className="CostTable">
        <tr>
          <td>Subtotal</td>
          <td className="Cost">
            {CURRENCY_SYMBOL[order.subTotal.currency]}
            {order.subTotal.value.toFixed(2)} {order.subTotal.currency}
          </td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className="Cost">
            {CURRENCY_SYMBOL[order.shipping.currency]}
            {order.shipping.value.toFixed(2)} {order.shipping.currency}
          </td>
        </tr>
      </table>
      <Divider className="CostDivider" />
      <table className={'TotalCostTable'}>
        <tr>
          <td>Total</td>
          <td className="Cost">
            {CURRENCY_SYMBOL[order.total.currency]}
            {order.total.value.toFixed(2)} {order.total.currency}
          </td>
        </tr>
      </table>
    </>
  );
}
