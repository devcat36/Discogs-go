import React from "react";
import {
  Segment,
  Header,
  Icon,
  Table,
  Divider,
  TextArea,
  Form,
  Dropdown,
  Checkbox,
  Button,
  CardContent,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import {
  COUNTRY_OPTIONS,
  CURRENCY_SYMBOL,
  CONDITION_OPTIONS,
  SHIPPING_OPTIONS,
  getTextWithValueInOptions,
} from "../../constants";
import PaymentMethodMenu from "./PaymentMethodMenu";
import CartItem from "./CartItem"

function OrderContainer({ order }) {
  const history = useHistory();

  const address = order.buyer.buyerSettings.address;
  const seller = order.seller;

  return (
    <div className={"OrderContainer"}>
      <OrderContainerHeader seller={seller} />
      <Segment attached>
        <div className={"OrderContents"}>
          <div className={"OrderLeft"}>
            <CartItemTable items={order.items} />
            <ShippingAddressSection address={address} />
            <CustomRequestForm seller={seller} />
          </div>
          <div className={"OrderRight"}>
            <ShippingSelectionSection />
            <PaymentMethodSelectionSection
              paymentMethods={seller.sellerSettings.paymentMethods}
            />
            <CostSection 
              subTotal = {order.subTotal.value.toFixed(2)}
              total = {order.total.value.toFixed(2)}
              shipping = {order.shipping.value.toFixed(2)}
              currency = {order.total.currency}
             />
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

function OrderContainerHeader({ seller }) {
  return (
    <Header attached={"top"} block>
      <span className={"ContainerHeader"}>
        Order From&nbsp;
        <Link to={"/marketplace/store/" + seller.id}>{seller.userName}</Link>
      </span>
      <Icon
        name={"trash alternate outline"}
        color={"grey"}
        style={{ float: "right" }}
      />
    </Header>
  );
}

function CartItemTable({ items }) {
  const CartItems = items.map((item) => (
    <CartItem
      key={item.id}
      imgsrc={item.image[0]}
      title={`
            ${item.release.artist[0].name} - 
            ${item.release.title} (
            ${item.release.format}, 
            ${item.release.formatSpec.map((spec) => spec.value).join(", ")})
          `}
      mediaCondition={getTextWithValueInOptions(
        item.mediaCondition,
        CONDITION_OPTIONS
      )}
      sleeveCondition={getTextWithValueInOptions(
        item.sleeveCondition,
        CONDITION_OPTIONS
      )}
      id={item.id}
    />
  ));

  return (
    <Table basic={"very"} unstackable>
      <Table.Body>{CartItems}</Table.Body>
    </Table>
  );
}

function ShippingAddressSection({ address }) {
  return (
    <>
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
        {getTextWithValueInOptions(address.country, COUNTRY_OPTIONS)}
      </p>
    </>
  );
}

function CustomRequestForm({ seller }) {
  return (
    <Form>
      <TextArea
        placeholder={`Instructions for ${seller.userName} (optional)`}
      />
    </Form>
  );
}

function ShippingSelectionSection() {
  const defaultShippingOptionValue = SHIPPING_OPTIONS[0].value;
  return (
    <>
      <Header as={"h4"} className={"ShippingHeader"}>
        Shipping
      </Header>
      <Dropdown
        options={SHIPPING_OPTIONS}
        value={defaultShippingOptionValue}
        selection
        fluid
      />
    </>
  );
}

function PaymentMethodSelectionSection({ paymentMethods }) {
  return (
    <>
      {" "}
      <Header as={"h4"}>Payment</Header>
      <Form style={{ float: "left", width: "100%" }}>
        <PaymentMethodMenu methods={paymentMethods} />
      </Form>
    </>
  );
}

function CostSection({ subTotal, total, shipping, currency }) {
  return (
    <>
      <table className={"CostTable"}>
        <tr>
          <td>Subtotal</td>
          <td className={"Cost"}>
            {CURRENCY_SYMBOL[currency]}
            {subTotal} {currency}
          </td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td className={"Cost"}>
            {CURRENCY_SYMBOL[currency]}
            {shipping} {currency}
          </td>
        </tr>
      </table>
      <Divider style={{ margin: "0.5rem 0 0 0" }} />
      <table className={"TotalCostTable"}>
        <tr>
          <td>Total</td>
          <td className={"Cost"}>
            {CURRENCY_SYMBOL[currency]}
            {total} {currency}
          </td>
        </tr>
      </table>
    </>
  );
}
