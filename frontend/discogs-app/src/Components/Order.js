import React from "react";
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
  List
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import OrderItemListElement from "./OrderItemListElement";
import OrderFeedItem from "./OrderFeedItem";

const dummyItem = {
  id: 916905096,
  imgsrc: 'https://img.discogs.com/TkebydPbjN76CckrDmAEWSWAwtw=/fit-in/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10474566-1498183797-4502.jpeg.jpg',
  title: 'The Alan Parsons Project - Eye In The Sky (LP, Album, Club, CRC) (Arista - AL9599)',
  mediaCondition: 'Near Mint (NM or M-)',
  sleeveCondition: 'Very Good Plus (VG+)',
  comment: 'Vinyl is shiny and VPI cleaned. Appears to have never been played. No scratches, but faint sleeve scuff. Outer sleeve is crisp and shiny, but has some minor edge, corner, ring wear will within the grade. Has printed inner sleeve, there as seam splits.',
  price: '$8.00'
};

const addressInfo = {
  name: 'Ryu JaeHoon',
  address: '5510 NE Courier Court STE 100',
  city: 'portland',
  state: 'OR',
  zip: '97128',
  country: 'United States'
};

function Order() {
  return (
    <div className={'contained'}>
      <Grid>
        <Grid.Column width={12}>
          <Breadcrumb style={{marginTop: '1rem'}}>
            <Breadcrumb.Section><Link to={'/sell/purchases'}>Purchases</Link></Breadcrumb.Section>
            <Breadcrumb.Divider/>
          </Breadcrumb>
          <div style={{display: 'flex', marginTop: '3px'}}>
            <Header style={{margin: 'auto 0 auto'}} as={'h2'}>Order #891327-250
              <Header.Subheader>
                <b>Created</b>: 22-Aug-20 02:28 AM &nbsp;&nbsp;&nbsp;&nbsp;<b>Last activity</b>: 22-Aug-20 02:32 AM
              </Header.Subheader>
            </Header>
            <div style={{marginLeft: 'auto'}}><Label size={'medium'} color={'teal'}><Icon
              name={'list alternate outline'}/>Invoice Sent</Label></div>
          </div>
          <Divider/>
          <Table unstackable>
            <Table.Header>
              <Table.Row textAlign={'center'}>
                <Table.HeaderCell textAlign="left">ID</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Item</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
              </Table.Row>
              <OrderItemListElement item={dummyItem}/>
            </Table.Header>
          </Table>
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'right'}}>
            <span>Subtotal for 1 item</span>
            <span style={{width: '5rem', textAlign: 'right'}}>$8.00</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'right'}}>
            <span>Shipping via Media Mail</span>
            <span style={{width: '5rem', textAlign: 'right'}}>$5.00</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'right'}}>
            <span><b>Total</b></span>
            <span style={{width: '5rem', textAlign: 'right', color: 'red'}}><b>$13.00</b></span>
          </div>
          <Divider/>
          <div style={{overflow: 'hidden'}}>
            <Button color={'blue'} floated={'right'}><Icon name="credit card outline"/>Checkout</Button>
          </div>
          <Header as="h2" style={{margin: 'auto 0 auto'}}>Timeline</Header>
          <Divider/>
          <Step.Group unstackable size={'mini'} style={{margin: 'auto 0 auto'}} fluid>
            <Step disabled>
              <Icon name="star"/>
              <Step.Content>
                <Step.Title>New Order</Step.Title>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name="list alternate outline"/>
              <Step.Content>
                <Step.Title>Invoice Sent</Step.Title>
              </Step.Content>
            </Step>
            <Step disabled>
              <Icon name="money"/>
              <Step.Content>
                <Step.Title>Payment Received</Step.Title>
              </Step.Content>
            </Step>
            <Step disabled>
              <Icon name="truck"/>
              <Step.Content>
                <Step.Title>Shipped</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Header as={'h3'} attached={'top'} block>
            Send a message
          </Header>
          <Segment attached>
            <div style={{overflow: 'hidden'}}>
              <Image floated="left" src={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}/>
              <div style={{width: 'calc(100% - 64px)', float: 'right'}}>
                <Form>
                  <TextArea/>
                  <Button style={{marginTop: '0.5rem'}}>Send Message</Button>
                </Form>
              </div>
            </div>
          </Segment>
          <Feed size={'large'}>
            <OrderFeedItem comment feed={{
              image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
              date: '22-Aug-20 02:28 AM',
              datePassed: '5 minutes ago',
              user: 'yunobo',
              content: 'Hi, I would like to cancel this order.'
            }}/>
            <OrderFeedItem feed={{
              icon: 'angle up',
              date: '22-Aug-20 02:28 AM',
              datePassed: '5 minutes ago',
              user: 'Franzson',
              content: <>changed the order status to <b>Invoice Sent</b></>
            }}/>
            <OrderFeedItem feed={{
              icon: 'star',
              date: '22-Aug-20 02:28 AM',
              datePassed: '5 minutes ago',
              user: 'yunobo',
              content: <>created this order</>
            }}/>
          </Feed>
        </Grid.Column>
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Card.Header>
                Seller Information
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Item.Group unstackable>
                <Item>
                  <Item.Image style={{width: '50px', height: '50px'}}
                              src={'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'}/>
                  <Item.Content>
                    <Item.Header style={{paddingTop: '7px'}}><Link to={'/store'}>Franzson</Link></Item.Header>
                    <Item.Meta><Link>Send Seller Feedback</Link></Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card.Content>
            <Card.Content>
              <Header as="h3">Accepted Payment(s)</Header>
              <List bulleted>
                <List.Item icon={'credit card outline'} content={'Credit Card'}/>
                <List.Item content={'Paypal'}/>
              </List>
              <p>Payment should <b>only</b> be made to the seller according to the method and details listed above. If a
                seller requests payment using information that differs from what is listed above, Discogs recommends you
                ask the seller to update their payment details and relist the item(s) for sale.</p>
              <Link>Seller Terms</Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                My Information
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Item.Group unstackable><Item>
                <Item.Image style={{width: '50px', height: '50px'}}
                            src={'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}/>
                <Item.Content>
                  <Item.Header style={{paddingTop: '7px'}}><Link>yunobo</Link></Item.Header>
                  <Item.Meta>yunobo@protonmail.ch</Item.Meta>
                </Item.Content>
              </Item></Item.Group>
            </Card.Content>
            <Card.Content>
              <Header as="h4">Shipping Address</Header>
              <p style={{marginLeft:'3px', fontFamily:'monospace'}}>
                {addressInfo.name}<br/>
                {addressInfo.address}<br/>
                {addressInfo.city}, {addressInfo.state}, {addressInfo.zip}<br/>
                {addressInfo.country}
              </p>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Order;