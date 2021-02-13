import React, { useEffect } from "react";
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import OrderContainer from "./OrderContainer";
import MarketplaceTab from "./MarketplaceTab";
import { useLazyQuery, gql } from "@apollo/client";
import useToken from "../hooks/useToken";
import Cookies from "universal-cookie";

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
  const [getData, { data }] = useLazyQuery(CART_QUERY);
  const token = useToken();
  useEffect(() => {
    if (token) getData({ variables: { id: token[1] } });
    else {
      const cookies = new Cookies();
      getData({ variables: { id: cookies.get("discogs_sid") } });
    }
  }, [token, getData]);
  if (!data) return null;
  console.log(data);
  return (
    <div className={"contained"}>
      <MarketplaceTab activeItem={"Cart"} />
      <div className={"Cart"}>
        <div className={"Orders"}>
          <Header as={"h2"}>
            You have{" "}
            {data.user.cart.orders
              .map((order) => order.items.length)
              .reduce((a, b) => a + b, 0)}{" "}
            items in your cart from {data.user.cart.orders.length} sellers.
          </Header>
          {data.user.cart.orders.map((order) => (
            <OrderContainer order={order} />
          ))}
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
