import React from 'react';
import { Divider } from 'semantic-ui-react';
import { CURRENCY_SYMBOL } from '../../constants';

const styles = {
  costTable: {
    width: '100%',
  },
  totalCostTable: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 'large',
    marginBottom: '1.5rem',
  },
  costLabel: {
    textAlign: 'right',
  },
  costDivider: {
    margin: '0.5rem 0 0 0',
  },
};

export default function CostTables({ order }) {
  return (
    <>
      <table style={styles.costTable}>
        <tr>
          <td>Subtotal</td>
          <td style={styles.costLabel}>
            {CURRENCY_SYMBOL[order.subTotal.currency]}
            {order.subTotal.value.toFixed(2)} {order.subTotal.currency}
          </td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td style={styles.costLabel}>
            {CURRENCY_SYMBOL[order.shipping.currency]}
            {order.shipping.value.toFixed(2)} {order.shipping.currency}
          </td>
        </tr>
      </table>
      <Divider style={styles.costDivider} />
      <table style={styles.totalCostTable}>
        <tr>
          <td>Total</td>
          <td style={styles.costLabel}>
            {CURRENCY_SYMBOL[order.total.currency]}
            {order.total.value.toFixed(2)} {order.total.currency}
          </td>
        </tr>
      </table>
    </>
  );
}
