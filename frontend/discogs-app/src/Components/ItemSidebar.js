import React from "react";
import {Header, Divider, Button, Sticky} from "semantic-ui-react";
import {Link, useHistory} from "react-router-dom";
import "./ItemSidebar.css"

function ItemSidebar(props) {
  const history = useHistory();
  return (
      <div className={'ItemSidebar'}>
        <div>
          <span className={'Price'}>€13.00</span>
          <span className={'Shipping'}> + shipping</span>
        </div>
        <Button className={'CartButton'} color={"green"} onClick={()=>{history.push('/sell/cart')}}>Add to Cart</Button>
        <Header as={'h3'}>Condition</Header>
        <Divider/>
        <div><span className={'ConditionLabel'}>Media: </span>Mint (M)</div>
        <div><span className={'ConditionLabel'}>Sleeve: </span>Mint (M)</div>
        <Header as={'h3'}>Seller:&nbsp;&nbsp;<Link className={'Seller'}>SignalsFromAbove</Link></Header>
        <Divider/>
        <div><span className={'ConditionLabel'}>Item Ships From: </span>Germany</div>
        <div><span className={'ConditionLabel'}>Payment Information: </span>Bank Transfer, PayPal, Money Order, Cash</div>
        <Link>Contact Seller:&nbsp;&nbsp;SignalsFromAbove</Link>
        <Header as={'h3'}>Comments</Header>
        <Divider/>
        <p>
          New Item.
        </p>
        <Header as={'h3'}>Release Information</Header>
        <Divider/>
        <Button color={'grey'}>View Release Page</Button>
        <Button color={'blue'}>More Copies For Sale</Button>
      </div>
  );
}

export default ItemSidebar;