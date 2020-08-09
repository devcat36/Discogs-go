import React from "react";
import {Table, Image, Header, Label, Button} from "semantic-ui-react";
import "./ItemListElement.css";
import * as Currency from "../currency";

function ItemListElement(props) {
  let labelString = '';
  for (let i = 0; i < props.label.length; i++) {
    labelString = labelString.concat(props.label[i]);
    if (i !== props.label.length - 1) labelString = labelString.concat(', ');
  }
  const currencySymbol=Currency.CURRENCY_SYMBOL[props.currency];
  return (
    <Table.Row className={'ItemListElement'}>
      <Table.Cell>
        <div className={'ItemCell'}>
          <Image className={'Image'} size={'small'} src={props.imgsrc}/>
          <div className={'Title'}>{props.listedName}</div>
          <div className={'Specs'}>
            <span className={'ConditionLabel'}>Label:</span>
            {labelString}
          </div>
          <div className={'Specs'}>
            <span className={'ConditionLabel'}>Media Condition:</span>
            {props.mediaCondition}
          </div>
          <div className={'Specs'}>
            <span className={'ConditionLabel'}>Sleeve Condition:</span>
            {props.sleeveCondition}
          </div>
          <Button size={'small'} className={'Label'}>View Release Page</Button>
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className={'Seller'}>{props.seller}</div>
        <div className={'Country'}>
          <span className={'ConditionLabel'}>Ships From:</span>
          {props.country}
        </div>
      </Table.Cell>
      <Table.Cell className={'PriceCell'}>
        <Header className={'Price'} as={'h4'} color={'red'}>{currencySymbol}{props.price.toFixed(2)}</Header>
        <div>+{currencySymbol}{props.shipping.toFixed(2)} shipping</div>
        {/*<span className={'TotalPrice'}>about {currencySymbol}{(props.price+props.shipping).toFixed(2)} total</span>*/}
      </Table.Cell>
      <Table.Cell className={'PurchaseCell'} textAlign={'center'}>
        <Button size={'small'} color={"green"}>Add to Cart</Button>
        <Header as={'h5'} className={'Details'}>Details</Header>
      </Table.Cell>
    </Table.Row>
  )
}

export default ItemListElement;