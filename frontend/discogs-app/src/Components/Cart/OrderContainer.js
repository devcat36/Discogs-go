import React from 'react';
import { Segment, Header, Divider, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SHIPPING_OPTIONS } from '../../constants';
import PaymentMethodMenu from './PaymentMethodMenu';
import OrderContainerHeader from './OrderContainerHeader';
import CartItemTable from './CartItemTable';
import ShippingAddress from './ShippingAddress';
import CustomRequestForm from './CustomRequestForm';
import CostTables from './CostTables';
import TermsAgreementCheckbox from './TermsAgreementCheckbox';
import OrderButton from './OrderButton';

const styles = {
  orderContainer: {
    paddingTop: '0.5rem',
  },
  orderSegment: {
    display: 'flex',
  },
  orderSection: {
    width: '70%',
  },
  orderAside: {
    width: '30%',
    padding: '6px 0 0 10px',
  },
  shippingAddressHeader: {
    marginTop: '0',
  },
  changeAdressLink: {
    fontWeight: 'normal',
    fontSize: 'small',
  },
};

export default function OrderContainer({ order }) {
  const shippingAddress = order.buyer.buyerSettings.address;
  return (
    <article style={styles.orderContainer}>
      <OrderContainerHeader seller={order.seller} />
      <Segment attached style={styles.orderSegment}>
        <section style={styles.orderSection}>
          <CartItemTable items={order.items} />

          <Header as="h3" style={styles.shippingAddressHeader}>
            Your Shipping Address&nbsp;&nbsp;
            <Link style={styles.changeAdressLink}> Change your address</Link>
          </Header>

          <Divider />
          <ShippingAddress address={shippingAddress} />
          <CustomRequestForm sellerName={order.seller.userName} />
        </section>

        <aside style={styles.orderAside}>
          <Header as="h4">Shipping</Header>
          <Dropdown options={SHIPPING_OPTIONS} value={SHIPPING_OPTIONS[0].value} selection fluid />

          <Header as="h4">Payment</Header>
          <PaymentMethodMenu methods={order.seller.sellerSettings.paymentMethods} />
          <CostTables order={order} />

          <TermsAgreementCheckbox />
          <OrderButton />
        </aside>
      </Segment>
    </article>
  );
}
