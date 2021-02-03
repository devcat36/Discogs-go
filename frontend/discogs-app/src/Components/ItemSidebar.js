import React from "react";
import { Header, Divider, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import {
  CONDITION_OPTIONS,
  COUNTRY_OPTIONS,
  CURRENCY_SYMBOL,
  PAYMENT_OPTIONS,
} from "../constants";

function ItemSidebar({ data }) {
  const history = useHistory();
  return (
    <div className={"ItemSidebar"}>
      <div>
        <span className={"Price"}>
          {data &&
            `${
              CURRENCY_SYMBOL[data.item.price.currency]
            } ${data.item.price.value.toFixed(2)}`}
        </span>
        <span className={"Shipping"}> + shipping</span>
      </div>
      <Button
        className={"CartButton"}
        color={"green"}
        onClick={() => {
          history.push("/sell/cart");
        }}
      >
        Add to Cart
      </Button>
      <Header as={"h3"}>Condition</Header>
      <Divider />
      <div>
        <span className={"ConditionLabel"}>Media: </span>
        {data &&
          CONDITION_OPTIONS.find(
            (option) => option.value === data.item.mediaCondition
          ).text}
      </div>
      <div>
        <span className={"ConditionLabel"}>Sleeve: </span>
        {data &&
          CONDITION_OPTIONS.find(
            (option) => option.value === data.item.sleeveCondition
          ).text}
      </div>
      <Header as={"h3"}>
        Seller:
        <Link
          to={`/marketplace/store/${data && data.item.seller.id}}`}
          style={{ marginLeft: "0.5rem" }}
        >
          {data && data.item.seller.userName}
        </Link>
      </Header>
      <Divider />
      <div>
        <span className={"SellerLabel"}>Item Ships From:</span>
        {data &&
          COUNTRY_OPTIONS.find(
            (option) => option.value === data.item.seller.sellerSettings.country
          ).text}
      </div>
      <div>
        <span className={"SellerLabel"}>Payment Information: </span>
        {data &&
          data.item.seller.sellerSettings.paymentMethods
            .map(
              (method) =>
                PAYMENT_OPTIONS.find((option) => option.value === method).text
            )
            .join(", ")}
      </div>
      <Link to="#">Contact Seller: {data && data.item.seller.userName}</Link>
      <Header as={"h3"}>Comments</Header>
      <Divider />
      <p>{data && data.item.comments}</p>
      <Header as={"h3"}>Release Information</Header>
      <Divider />
      <Button
        color={"grey"}
        onClick={() => {
          history.push(`/explore/release/${data && data.item.release.id}`);
        }}
      >
        View Release Page
      </Button>
      <Button color={"blue"}>More Copies For Sale</Button>
    </div>
  );
}

export default ItemSidebar;
