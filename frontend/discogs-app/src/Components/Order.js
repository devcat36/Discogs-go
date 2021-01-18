import React, { useEffect } from "react";
import {
  Label,
  Header,
  Button,
  Table,
  Grid,
  Icon,
  Divider,
  Breadcrumb,
  Step,
  Feed,
  Form,
  TextArea,
  Segment,
  Image,
  Card,
  Item,
  List,
  Modal,
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import OrderItemListElement from "./OrderItemListElement";
import OrderFeedItem from "./OrderFeedItem";
import useToken from "../hooks/useToken";
import { gql, useLazyQuery } from "@apollo/client";
import moment from "moment";
import {
  CONDITION_OPTIONS,
  COUNTRY_OPTIONS,
  CURRENCY_SYMBOL,
  ORDER_STATUS,
  PAYMENT_OPTIONS,
} from "../constants";

const ORDER = gql`
  query NavbarProfile($id: ID!, $token: ID!) {
    order(id: $id, token: $token) {
      id
      dateTimeCreated
      dateTimeModified
      items {
        id
        image
        mediaCondition
        sleeveCondition
        release {
          title
          artist {
            name
          }
          image
        }
        price {
          currency
          value
        }
        shipping {
          currency
          value
        }
      }
      seller {
        id
        userName
        image
        sellerSettings {
          paymentMethods
          sellerTerm
        }
      }
      buyer {
        id
        image
        userName
        emailAddress
        buyerSettings {
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
      subTotal {
        currency
        value
      }
      total {
        currency
        value
      }
      shipping {
        currency
        value
      }
      timeline {
        sender {
          id
          image
          userName
        }
        timestamp
        isCustom
        content
      }
      status
    }
  }
`;

function Order() {
  const { id } = useParams();
  const [getData, { data }] = useLazyQuery(ORDER);
  const token = useToken();
  useEffect(() => {
    token && getData({ variables: { id: id, token: token[1] } });
  }, [id, token, getData]);
  if (!token || !data) return null;
  return (
    <div className={"contained"}>
      <Grid>
        <Grid.Column width={12}>
          <Breadcrumb style={{ marginTop: "1rem" }}>
            <Breadcrumb.Section>
              <Link to={"/sell/purchases"}>Purchases</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
          </Breadcrumb>
          <div style={{ display: "flex", marginTop: "3px" }}>
            <Header style={{ margin: "auto 0 auto" }} as={"h2"}>
              Order #{data.order.id}
              <Header.Subheader>
                <b>Created</b>:{" "}
                {moment(data.order.dateTimeCreated).format("DD-MMM-YY h:mm A")}
                <b style={{ marginLeft: "1rem" }}>Last activity</b>:{" "}
                {moment(data.order.dateTimeModified).format("DD-MMM-YY h:mm A")}
              </Header.Subheader>
            </Header>
            <div style={{ marginLeft: "auto" }}>
              <Label
                size={"medium"}
                color={
                  ORDER_STATUS.find(
                    (status) => status.value === data.order.status
                  ).color
                }
              >
                <Icon
                  name={
                    ORDER_STATUS.find(
                      (status) => status.value === data.order.status
                    ).icon
                  }
                />
                {
                  ORDER_STATUS.find(
                    (status) => status.value === data.order.status
                  ).text
                }
              </Label>
            </div>
          </div>
          <Divider />
          <Table unstackable>
            <Table.Header>
              <Table.Row textAlign={"center"}>
                <Table.HeaderCell textAlign="left">ID</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Item</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
              </Table.Row>
              {data.order.items.map((item) => (
                <OrderItemListElement
                  item={{
                    id: item.id,
                    imgsrc:
                      item.image.length > 0
                        ? item.image[0]
                        : item.release.image.length > 0
                        ? item.release.image[0]
                        : null,
                    title: `${
                      item.release.artist.length === 1
                        ? item.release.artist[0].name
                        : "Various Artists"
                    } - ${item.release.title}`,
                    mediaCondition: CONDITION_OPTIONS.find(
                      (option) => option.value === item.mediaCondition
                    ).text,
                    sleeveCondition: CONDITION_OPTIONS.find(
                      (option) => option.value === item.sleeveCondition
                    ).text,
                    comment: item.comment,
                    price:
                      CURRENCY_SYMBOL[item.price.currency] +
                      item.price.value.toFixed(2),
                  }}
                />
              ))}
            </Table.Header>
          </Table>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
            }}
          >
            <span>
              Subtotal for {data.order.items.length} item
              {data.order.items.length > 1 && "s"}
            </span>
            <span style={{ width: "5rem", textAlign: "right" }}>
              {CURRENCY_SYMBOL[data.order.subTotal.currency] +
                data.order.subTotal.value.toFixed(2)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
            }}
          >
            <span>Shipping via Media Mail</span>
            <span style={{ width: "5rem", textAlign: "right" }}>
              {CURRENCY_SYMBOL[data.order.subTotal.currency] +
                data.order.shipping.value.toFixed(2)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
            }}
          >
            <span>
              <b>Total</b>
            </span>
            <span style={{ width: "5rem", textAlign: "right", color: "red" }}>
              <b>
                {CURRENCY_SYMBOL[data.order.subTotal.currency] +
                  data.order.total.value.toFixed(2)}
              </b>
            </span>
          </div>
          <Divider />
          <div style={{ overflow: "hidden" }}>
            <Button color={"blue"} floated={"right"}>
              <Icon name="credit card outline" />
              Checkout
            </Button>
          </div>
          <Header as="h2" style={{ margin: "auto 0 auto" }}>
            Timeline
          </Header>
          <Divider />
          <Step.Group
            unstackable
            size={"mini"}
            style={{ margin: "auto 0 auto" }}
            fluid
          >
            <Step
              disabled={!(data.order.status === "NEW_ORDER")}
              active={data.order.status === "NEW_ORDER"}
            >
              <Icon name="star" />
              <Step.Content>
                <Step.Title>New Order</Step.Title>
              </Step.Content>
            </Step>
            <Step
              disabled={!(data.order.status === "INVOICE_SENT")}
              active={data.order.status === "INVOICE_SENT"}
            >
              <Icon name="list alternate outline" />
              <Step.Content>
                <Step.Title>Invoice Sent</Step.Title>
              </Step.Content>
            </Step>
            <Step
              disabled={!(data.order.status === "PAYMENT_RECEIVED")}
              active={data.order.status === "PAYMENT_RECEIVED"}
            >
              <Icon name="payment" />
              <Step.Content>
                <Step.Title>Payment Received</Step.Title>
              </Step.Content>
            </Step>
            <Step
              disabled={!(data.order.status === "SHIPPED")}
              active={data.order.status === "SHIPPED"}
            >
              <Icon name="truck" />
              <Step.Content>
                <Step.Title>Shipped</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Header as={"h3"} attached={"top"} block>
            Send a message
          </Header>
          <Segment attached>
            <div style={{ overflow: "hidden" }}>
              <Image
                floated="left"
                style={{ width: "50px" }}
                src={data.order.buyer.image}
              />
              <div style={{ width: "calc(100% - 64px)", float: "right" }}>
                <Form>
                  <TextArea />
                  <Button style={{ marginTop: "0.5rem" }}>Send Message</Button>
                </Form>
              </div>
            </div>
          </Segment>
          <Feed size={"large"}>
            {data.order.timeline.map((event) => (
              <OrderFeedItem
                comment={event.isCustom}
                feed={{
                  image: event.isCustom && event.sender.image,
                  date: moment(event.timestamp).format("DD-MMM-YY h:mm A"),
                  datePassed: moment(event.timestamp).fromNow(),
                  user: event.sender.userName,
                  content: (() => {
                    if (event.isCustom) return event.content;
                    else if (event.content === "NEW_ORDER")
                      return "created this order";
                    else
                      return (
                        <>
                          changed the order status to{" "}
                          <b>
                            {
                              ORDER_STATUS.find(
                                (status) => status.value === event.content
                              ).text
                            }
                          </b>
                        </>
                      );
                  })(),
                  icon:
                    !event.isCustom &&
                    ORDER_STATUS.find(
                      (status) => status.value === event.content
                    ).icon,
                }}
              />
            ))}
          </Feed>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Card.Header>Seller Information</Card.Header>
            </Card.Content>
            <Card.Content>
              <Item.Group unstackable>
                <Item>
                  <Item.Image
                    style={{ width: "50px", height: "50px" }}
                    src={data.order.seller.image}
                  />
                  <Item.Content>
                    <Item.Header style={{ paddingTop: "7px" }}>
                      <Link to={`/marketplace/store/${data.order.seller.id}`}>
                        {data.order.seller.userName}
                      </Link>
                    </Item.Header>
                    <Item.Meta>
                      <Link>Send Seller Feedback</Link>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Content>
            <Card.Content>
              <Header as="h3">Accepted Payment(s)</Header>
              <List bulleted>
                {data.order.seller.sellerSettings.paymentMethods.map(
                  (method) => (
                    <List.Item
                      content={
                        PAYMENT_OPTIONS.find(
                          (option) => option.value === method
                        ).text
                      }
                      icon={method === "CREDIT_CARD" && "credit card outline"}
                    />
                  )
                )}
              </List>
              <p>
                Payment should <b>only</b> be made to the seller according to
                the method and details listed above. If a seller requests
                payment using information that differs from what is listed
                above, Discogs recommends you ask the seller to update their
                payment details and relist the item(s) for sale.
              </p>
              <Modal
                trigger={<a>Seller Terms</a>}
                content={data.order.seller.sellerSettings.sellerTerm}
              />
            </Card.Content>
          </Card>
          <Card style={{ overflow: "hidden" }}>
            <Card.Content>
              <Card.Header>My Information</Card.Header>
            </Card.Content>
            <Card.Content>
              <Item.Group unstackable>
                <Item>
                  <Item.Image
                    style={{ width: "50px", height: "50px" }}
                    src={data.order.buyer.image}
                  />
                  <Item.Content>
                    <Item.Header style={{ paddingTop: "7px" }}>
                      <Link>{data.order.buyer.userName}</Link>
                    </Item.Header>
                    <Item.Meta>{data.order.buyer.emailAddress}</Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Content>
            <Card.Content>
              <Header as="h4">Shipping Address</Header>
              <p style={{ marginLeft: "3px", fontFamily: "monospace" }}>
                {data.order.buyer.buyerSettings.address.fullName}
                <br />
                {data.order.buyer.buyerSettings.address.address1}
                <br />
                {data.order.buyer.buyerSettings.address.address2}
                <br />
                {data.order.buyer.buyerSettings.address.city},{" "}
                {data.order.buyer.buyerSettings.address.region}
                <br />
                {
                  COUNTRY_OPTIONS.find(
                    (option) =>
                      option.value ===
                      data.order.buyer.buyerSettings.address.country
                  ).text
                }
              </p>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Order;
