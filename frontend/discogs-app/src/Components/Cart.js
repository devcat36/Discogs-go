import React from "react";
import {Segment, Header, Table, Button, Icon} from "semantic-ui-react";
import {Link, useHistory} from 'react-router-dom';
import OrderContainer from "./OrderContainer";
import MarketplaceTab from "./MarketplaceTab";
import CartItem from "./CartItem";
import {useQuery, gql} from '@apollo/client';

const dummyCI = [(
  <CartItem
    imgsrc={'https://img.discogs.com/teNpDdsevSibO99zJ4atq9ccJ14=/fit-in/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1562844-1228756506.jpeg.jpg'}
    title={'Serge Gainsbourg & Jane Birkin - Jane Birkin - Serge Gainsbourg (LP, Album, RE)'}
    mediaCondition={'Very Good Plus (VG+)'}
    sleeveCondition={'Very Good Plus (VG+)'}
    price={'$21.00'}
  />), (
  <CartItem
    imgsrc={'https://img.discogs.com/TkebydPbjN76CckrDmAEWSWAwtw=/fit-in/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10474566-1498183797-4502.jpeg.jpg'}
    title={'The Alan Parsons Project - Eye In The Sky (LP, Album, Club, CRC)'}
    mediaCondition={'Media: Near Mint (NM or M-)'}
    sleeveCondition={'Very Good Plus (VG+)'}
    price={'$7.00'}
  />)];
const dummyCI_2 = [(
  <CartItem
    imgsrc={'https://img.discogs.com/3X6ZHTDbqIs-wozfEQmtAAm0dO0=/fit-in/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12021064-1526712986-6065.jpeg.jpg'}
    title={'Paul McCartney - Chaos And Creation In The Backyard (CD, Album, Ltd, RE, SHM)'}
    mediaCondition={'Very Good Plus (VG+)'}
    sleeveCondition={'Very Good Plus (VG+)'}
    price={'CHF32.15'}
  />)];

function Cart() {
  return (
    <div className={'contained'}>
      <MarketplaceTab activeItem={'Cart'}/>
      <div className={'Cart'}>
        <div className={'Orders'}>
          <Header as={'h2'}>You have 3 items in your cart from 2 sellers.</Header>
          <OrderContainer seller={'Franzon'} cartItems={dummyCI}/>
          <OrderContainer seller={'KUPIKU-COM'} cartItems={dummyCI_2}/>
        </div>
        <div className={'Aside'}>
          <Button compact><Icon name={'trash alternate outline'}/>Empty Cart</Button>
          <Segment>
            <Header as={'h3'}>Buying Items on Discogs</Header>
            <p>
              Your cart can hold items from many different sellers. When you're ready to check out, you'll place one
              order with each seller.
            </p>
            <Link>Learn more about how to buy</Link>
            <br/><br/>
            <p>
              If you plan to use PayPal to pay, be sure that your shipping address on Discogs matches your shipping
              address on file with PayPal!
            </p>
            <p>
              Check out our <Link>Safe Buying Tips</Link> for for more.
            </p>
          </Segment>
        </div>
      </div>
    </div>
  )
}

export default Cart;