import React, {useState} from "react";
import {Menu, Dropdown, Header} from "semantic-ui-react";

function PaginationTop(props) {
  const listingRange = {low: 1, high: 555173411};
  const [listingAmount, setListingAmount] =  useState(typeof props.amountOptions != "undefined"?props.amountOptions[0]:null);
  const [sortOrder, setSortOrder] = useState(typeof props.sortOptions != "undefined"?props.sortOptions[0]:null);
  return (
    <Menu borderless>
      <Menu.Item>{typeof props.header == "undefined" ?
        <Header as={'h5'}>Showing&nbsp;&nbsp;{listingRange.low.toLocaleString()}&nbsp;&nbsp;–&nbsp;&nbsp;
          {listingAmount.text}&nbsp;&nbsp;of&nbsp;&nbsp;{listingRange.high.toLocaleString()}</Header>:props.header}
      </Menu.Item>
      <Menu.Menu position={'right'}>
        <Menu.Item style={{padding: '0.5rem 1rem 0.5rem 1rem'}}>
          {typeof props.sortOptions != "undefined" &&
          <>Sort
            <Dropdown
              compact
              selection
              options={props.sortOptions}
              selectedLabel={sortOrder}
              value={sortOrder.value}
              style={{margin: '0 2rem 0 1rem'}}
              onChange={(e, data) => {
                let order = props.sortOptions.find(item => item.key === data.value);
                setSortOrder(order);
                if (typeof props.onSortOrderChanged == "function")
                  props.onSortOrderChanged(order);
              }}
            /></>}
          {typeof props.amountOptions != "undefined" &&
            <>Show
            <Dropdown
              compact
              selection
              options={props.amountOptions}
              selectedLabel={listingAmount}
              value={listingAmount.value}
              style={{margin: '0 0 0 1rem'}}
              onChange={(e, data) => {
                let amount = props.amountOptions.find(item => item.key === data.value);
                setListingAmount(amount);
                if (typeof props.onListingAmountChange == "function")
                  props.onListingAmountChange(amount);
              }}
            /></>}
        </Menu.Item>
        {typeof props.label != "undefined" &&
          <Menu.Item>
            {props.label}
          </Menu.Item>
        }
      </Menu.Menu>
    </Menu>
  );
}

export default PaginationTop;