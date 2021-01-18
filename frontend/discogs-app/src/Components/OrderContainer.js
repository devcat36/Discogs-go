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
  Menu, Checkbox, Button
} from "semantic-ui-react";
import {Link, useHistory} from 'react-router-dom';

const addressInfo = {
  name: 'Ryu JaeHoon',
  address: '5510 NE Courier Court STE 100',
  city: 'portland',
  state: 'OR',
  zip: '97128',
  country: 'United States'
};

const shippingOptions = [
  {
    key: 'media mail',
    text: 'Media Mail - $7.00',
    value: 'Media Mail',
  }
];

function OrderContainer(props) {
  const history=useHistory();
  return (
    <div className={'OrderContainer'}>
      <Header attached={'top'} block>
        <span className={'ContainerHeader'}>
          Order From <Link to={'/store/'+props.seller}>{props.seller}</Link>
        </span>
        <Icon name={'trash alternate outline'} color={'grey'} style={{float: 'right'}}/>
      </Header>
      <Segment attached>
        <div className={'OrderContents'}>
          <div className={'OrderLeft'}>
            <Table basic={'very'} unstackable><Table.Body>
              {props.cartItems.map(item=>item)}
            </Table.Body></Table>
            <Header as={'h3'} style={{marginTop: '0'}}>
              Your Shipping Address&nbsp;&nbsp;
              <Link className={'ChangeAddress'}> Change your address</Link>
            </Header>
            <Divider/>
            <p>
              {addressInfo.name}<br/>
              {addressInfo.address}<br/>
              {addressInfo.city}, {addressInfo.state}, {addressInfo.zip}<br/>
              {addressInfo.country}
            </p>
            <Form>
              <TextArea placeholder={`Instructions for ${props.seller} (optional)`}/>
            </Form>
          </div>
          <div className={'OrderRight'}>
            <Header as={'h4'} className={'ShippingHeader'}>Shipping</Header>
            <Dropdown
              selection
              fluid
              options={shippingOptions}
              value={shippingOptions[0].value}
            />
            <Header as={'h4'}>Payment</Header>
            <Form style={{float: 'left'}}>
              <Menu vertical fluid className={'PaymentMenu'}>
                <Menu.Item>
                  <Form.Field>
                    <Radio floated={'left'} label={
                      <label>
                        Credit Card
                        <Image
                          style={{marginTop:'0.3rem'}}
                          src={'https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/btn_paynowCC_NOBT.png'}/>
                      </label>}/>
                  </Form.Field>
                </Menu.Item>
                <Menu.Item>
                  <Form.Field><Radio style={{width:'100%'}} label={
                    <label>
                      Paypal
                      <Image style={{display:'inline', marginLeft: '0.5rem'}} src={'https://a.discogs.com/86aa88791ae6ffc886bdc2cc9a5c60ff590fbab6/images/PayPal_mark_37x23.gif'}/>
                    </label>}/></Form.Field>
                </Menu.Item>
                <Menu.Item>
                  <Form.Field><Radio label={'Bank Transfer, Check, Cash, or Money Order'}/></Form.Field>
                </Menu.Item>
              </Menu>
            </Form>
            <table className={'CostTable'}>
              <tr>
                <td>Subtotal</td>
                <td className={'Cost'}>$28.00 USD</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className={'Cost'}>$5.00 USD</td>
              </tr>
            </table>
            <Divider style={{margin: '0.5rem 0 0 0'}}/>
            <table className={'TotalCostTable'}>
              <tr>
                <td>Total</td>
                <td className={'Cost'}>$33.00 USD</td>
              </tr>
            </table>
            <Checkbox label={
              <label style={{textAlign: 'right'}}>I agree to&nbsp;
                <Link>Sales & Transaction Policy</Link> and <Link>Seller Terms</Link>
              </label>}/>
            <Button color={'green'} fluid style={{marginTop: '1rem'}} onClick={()=>{history.push('/sell/order')}}>Place order and pay now</Button>
          </div>
        </div>
      </Segment>
    </div>
  );
}

export default OrderContainer;