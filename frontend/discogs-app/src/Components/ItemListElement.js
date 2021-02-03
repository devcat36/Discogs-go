import React from "react";
import { Table, Image, Header, Label, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import * as Currency from "../constants";

function ItemListElement(props) {
  const history = useHistory();
  // let labelString = '';
  // for (let i = 0; i < props.label.length; i++) {
  //   labelString = labelString.concat(props.label[i]);
  //   if (i !== props.label.length - 1) labelString = labelString.concat(', ');
  // }
  const currencySymbol = Currency.CURRENCY_SYMBOL[props.currency];
  return (
    <Table.Row className={"ItemListElement"}>
      <Table.Cell>
        <div className={"ItemCell"}>
          <Image className={"Image"} size={"small"} src={props.imgsrc} onClick={()=>history.push(`/marketplace/item/${props.itemId}`)} />
          <div className={"Title"}>
            <Link to={`/marketplace/item/${props.itemId}`}>{props.listedName}</Link>
          </div>
          {/* <div className={'Specs'}>
            <span className={'ConditionLabel'}>Label:</span>
            {labelString}
          </div> */}
          <div className={"Specs"}>
            <span className={"ConditionLabel"}>Media Condition:</span>
            {props.mediaCondition}
          </div>
          <div className={"Specs"}>
            <span className={"ConditionLabel"}>Sleeve Condition:</span>
            {props.sleeveCondition}
          </div>
          {props.comments && (
            <div className={"Specs"}>
              <span className={"ConditionLabel"}>Comments:</span>
              {props.comments}
            </div>
          )}
          <Button size={"small"} className={"Label"} onClick={()=>history.push(`/explore/release/${props.releaseId}`)}>
            View Release Page
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className={"Seller"}>
          <Link to={"/store/" + props.seller}>{props.seller}</Link>
        </div>
        <div className={"Country"}>
          <span className={"ConditionLabel"}>Ships From:</span>
          {props.country}
        </div>
      </Table.Cell>
      <Table.Cell className={"PriceCell"}>
        <Header className={"Price"} as={"h4"} color={"red"}>
          {currencySymbol}
          {props.price.toFixed(2)}
        </Header>
        <div>
          +{currencySymbol}
          {props.shipping.toFixed(2)} shipping
        </div>
        {/*<span className={'TotalPrice'}>about {currencySymbol}{(props.price+props.shipping).toFixed(2)} total</span>*/}
      </Table.Cell>
      <Table.Cell className={"PurchaseCell"} textAlign={"center"}>
        <Button
          size={"small"}
          color={"green"}
          onClick={() => {
            history.push("/sell/cart");
          }}
        >
          Add to Cart
        </Button>
        <Header as={"h5"} className={"Details"}>
          <Link to={`/marketplace/item/${props.itemId}`}>Details</Link>
        </Header>
      </Table.Cell>
    </Table.Row>
  );
}

export default ItemListElement;
