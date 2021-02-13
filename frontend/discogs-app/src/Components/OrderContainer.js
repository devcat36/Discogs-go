import React from "react";
import {
  Segment,
  Header,
  Icon,
  Image,
  Table,
  Divider,
  TextArea,
  Form,
  Dropdown,
  Radio,
  Menu,
  Checkbox,
  Button,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { COUNTRY_OPTIONS, CURRENCY_SYMBOL } from "../constants";
import PaymentMethodMenu from "./PaymentMethodMenu";
import CartItem from "./CartItem";
import { CONDITION_OPTIONS } from "../constants";

const addressInfo = {
  name: "Ryu JaeHoon",
  address: "5510 NE Courier Court STE 100",
  city: "portland",
  state: "OR",
  zip: "97128",
  country: "United States",
};

const shippingOptions = [
  {
    key: "media mail",
    text: "Media Mail - $7.00",
    value: "Media Mail",
  },
];

function OrderContainer({ order }) {
  const history = useHistory();
  const cartItems = order.items.map((item) => (
    <CartItem
      key={item.id}
      imgsrc={item.image[0]}
      title={`
        ${item.release.artist[0].name} - 
        ${item.release.title} (
        ${item.release.format}, 
        ${item.release.formatSpec.map((spec) => spec.value).join(", ")})
      `}
      mediaCondition={
        CONDITION_OPTIONS.find((opt) => opt.value == item.mediaCondition).text
      }
      sleeveCondition={
        CONDITION_OPTIONS.find((opt) => opt.value == item.sleeveCondition).text
      }
      id={item.id}
    />
  ));
  const address = order.buyer.buyerSettings.address;
  const seller = order.seller;
  return (
    <div className={"OrderContainer"}>
      <Header attached={"top"} block>
        <span className={"ContainerHeader"}>
          Order From{" "}
          <Link to={"/marketplace/store/" + seller.id}>{seller.userName}</Link>
        </span>
        <Icon
          name={"trash alternate outline"}
          color={"grey"}
          style={{ float: "right" }}
        />
      </Header>
      <Segment attached>
        <div className={"OrderContents"}>
          <div className={"OrderLeft"}>
            <Table basic={"very"} unstackable>
              <Table.Body>{cartItems}</Table.Body>
            </Table>
            <Header as={"h3"} style={{ marginTop: "0" }}>
              Your Shipping Address&nbsp;&nbsp;
              <Link className={"ChangeAddress"}> Change your address</Link>
            </Header>
            <Divider />
            <p>
              {address.fullName}
              <br />
              {address.address1}
              <br />
              {address.address2}
              <br />
              {address.city}, {address.region}
              <br />
              {COUNTRY_OPTIONS.find((opt) => opt.value == address.country).text}
            </p>
            <Form>
              <TextArea
                placeholder={`Instructions for ${seller.userName} (optional)`}
              />
            </Form>
          </div>
          <div className={"OrderRight"}>
            <Header as={"h4"} className={"ShippingHeader"}>
              Shipping
            </Header>
            <Dropdown
              selection
              fluid
              options={shippingOptions}
              value={shippingOptions[0].value}
            />
            <Header as={"h4"}>Payment</Header>
            <Form style={{ float: "left", width: "100%" }}>
              <PaymentMethodMenu
                methods={seller.sellerSettings.paymentMethods}
              />
            </Form>
            <table className={"CostTable"}>
              <tr>
                <td>Subtotal</td>
                <td className={"Cost"}>
                  {CURRENCY_SYMBOL[order.subTotal.currency]}
                  {order.subTotal.value.toFixed(2)} {order.subTotal.currency}
                </td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className={"Cost"}>
                  {CURRENCY_SYMBOL[order.shipping.currency]}
                  {order.shipping.value.toFixed(2)} {order.shipping.currency}
                </td>
              </tr>
            </table>
            <Divider style={{ margin: "0.5rem 0 0 0" }} />
            <table className={"TotalCostTable"}>
              <tr>
                <td>Total</td>
                <td className={"Cost"}>
                  {CURRENCY_SYMBOL[order.total.currency]}
                  {order.total.value.toFixed(2)} {order.total.currency}
                </td>
              </tr>
            </table>
            <Checkbox
              label={
                <label style={{ textAlign: "right" }}>
                  I agree to&nbsp;
                  <Link>Sales & Transaction Policy</Link> and{" "}
                  <Link>Seller Terms</Link>
                </label>
              }
            />
            <Button
              color={"green"}
              fluid
              style={{ marginTop: "1rem" }}
              onClick={() => {
                history.push("/marketplace/order/" + order.id);
              }}
            >
              Place order and pay now
            </Button>
          </div>
        </div>
      </Segment>
    </div>
  );
}

export default OrderContainer;
