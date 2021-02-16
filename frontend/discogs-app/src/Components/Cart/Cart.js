import React, { useEffect } from "react";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";
import useToken from "../../hooks/useToken";
import OrderContainer from "./OrderContainer";
import MarketplaceTab from "../MarketplaceTab";

const CART_QUERY = gql`
  query cart($id: ID!) {
    user(id: $id) {
      cart {
        orders {
          id
          buyer {
            buyerSettings {
              currency
              address {
                fullName
                address1
                address2
                city
                region
                country
              }
            }
          }
          total {
            currency
            value
          }
          shipping {
            currency
            value
          }
          subTotal {
            currency
            value
          }
          seller {
            id
            userName
            sellerSettings {
              paymentMethods
            }
          }
          items {
            id
            image
            release {
              title
              artist {
                name
              }
              format
              formatSpec {
                value
              }
              image
            }
            mediaCondition
            sleeveCondition
          }
        }
      }
    }
  }
`;

function Cart() {
  const [fetchCartData, { data: fetchedData }] = useLazyQuery(CART_QUERY);
  const token = useToken();
  useEffect(() => {
    let id = getTokenOrSessionId();
    fetchCartData({ variables: { id } });

    function getTokenOrSessionId() {
      if (token) return token[1];
      else return localStorage.getItem("discogs_sid");
    }
  }, [token, fetchCartData]);

  if (!fetchedData) return null;
  
  const cartData = fetchedData.user.cart;
  const totalItemCount = cartData.orders
    .map((order) => order.items.length)
    .reduce((a, b) => a + b, 0);
  const totalSellerCount = cartData.orders.length;

  const CartOrderContainers = cartData.orders.map((order) => (
    <OrderContainer order={order} />
  ));

  return (
    <div className={"contained"}>
      <MarketplaceTab activeItem={"Cart"} />
      <div className={"Cart"}>
        <div className={"Orders"}>
          <Header as={"h2"}>
            {`You have ${totalItemCount} items in your cart from ${totalSellerCount} sellers.`}
          </Header>
          {CartOrderContainers}
        </div>
        <div className={"Aside"}>
          <Button compact>
            <Icon name={"trash alternate outline"} />
            Empty Cart
          </Button>
          <Segment>
            <Header as={"h3"}>Buying Items on Discogs</Header>
            <p>
              Your cart can hold items from many different sellers. When you're
              ready to check out, you'll place one order with each seller.
            </p>
            <Link>Learn more about how to buy</Link>
            <br />
            <br />
            <p>
              If you plan to use PayPal to pay, be sure that your shipping
              address on Discogs matches your shipping address on file with
              PayPal!
            </p>
            <p>
              Check out our <Link>Safe Buying Tips</Link> for for more.
            </p>
          </Segment>
        </div>
      </div>
    </div>
  );
}
export default Cart;
