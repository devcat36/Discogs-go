import React, { useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import useToken from "../../hooks/useToken";
import ErrorPage from "../ErrorPage.js";
import CartPage from "./CartPage";

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
  const [fetchCartData, { data, error }] = useLazyQuery(CART_QUERY);
  const token = useToken();
  useEffect(() => {
    let id = getTokenOrSessionId();
    fetchCartData({ variables: { id } });

    function getTokenOrSessionId() {
      if (token) return token[1];
      else return localStorage.getItem("discogs_sid");
    }
  }, [token, fetchCartData]);

  if (error) return <ErrorPage />;
  else if (data) return <CartPage cart={data.user.cart} />;
  else return null;
}
export default Cart;
