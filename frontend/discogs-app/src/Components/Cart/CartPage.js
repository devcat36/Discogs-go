import React from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import OrderContainer from './OrderContainer';
import MarketplaceTab from '../MarketplaceTab';

export default function CartPage({ cart }) {
  const totalItemCount = cart.orders.map((order) => order.items.length).reduce((a, b) => a + b, 0);
  const totalSellerCount = cart.orders.length;

  const CartOrders = cart.orders.map((order) => <OrderContainer order={order} />);

  return (
    <div className={'contained'}>
      <MarketplaceTab activeItem={'Cart'} />
      <main className={'Cart'}>
        <section className={'Orders'}>
          <Header as={'h2'}>
            {`You have ${totalItemCount} items in your cart from ${totalSellerCount} sellers.`}
          </Header>
          {CartOrders}
        </section>
        <aside className={'Aside'}>
          <Button compact>
            <Icon name={'trash alternate outline'} />
            Empty Cart
          </Button>
          <Segment>
            <Header as={'h3'}>Buying Items on Discogs</Header>
            <p>
              Your cart can hold items from many different sellers. When you're ready to check out,
              you'll place one order with each seller.
            </p>
            <Link>Learn more about how to buy</Link>
            <br />
            <br />
            <p>
              If you plan to use PayPal to pay, be sure that your shipping address on Discogs
              matches your shipping address on file with PayPal!
            </p>
            <p>
              Check out our <Link>Safe Buying Tips</Link> for for more.
            </p>
          </Segment>
        </aside>
      </main>
    </div>
  );
}
