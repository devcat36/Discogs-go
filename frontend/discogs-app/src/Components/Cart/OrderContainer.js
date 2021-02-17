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

export default function OrderContainer({ order }) {
  const shippingAddress = order.buyer.buyerSettings.address;
  return (
    <article className="OrderContainer">
      <OrderContainerHeader seller={order.seller} />
      <Segment attached className="OrderContents">
        <section className="OrderLeft">
          <CartItemTable items={order.items} />

          <Header as="h3" className="ShippingAddressHeader">
            Your Shipping Address&nbsp;&nbsp;
            <Link className="ChangeAddress"> Change your address</Link>
          </Header>

          <Divider />
          <ShippingAddress address={shippingAddress} />
          <CustomRequestForm sellerName={order.seller.userName} />
        </section>

        <aside className="OrderRight">
          <Header as="h4" className="ShippingOptionsHeader">
            Shipping
          </Header>
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
