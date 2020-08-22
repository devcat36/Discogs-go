import React, {useState} from "react";
import {Menu, Dropdown, Header} from "semantic-ui-react";

function PaginationTop(props) {
  const listingRange = {low: 1, high: 555173411};
  const [listingAmount, setListingAmount] = useState(props.amountOptions[0]);
  const [sortOrder, setSortOrder] = useState(props.sortOptions[0]);
  return(
      <Menu borderless>
        <Menu.Item>
          <Header as={'h5'}>Showing&nbsp;&nbsp;{listingRange.low.toLocaleString()}&nbsp;&nbsp;–&nbsp;&nbsp;
            {listingAmount.text}&nbsp;&nbsp;of&nbsp;&nbsp;{listingRange.high.toLocaleString()}</Header>
        </Menu.Item>
        <Menu.Menu position={'right'}>
          <Menu.Item style={{padding: '0.5rem 1rem 0.5rem 1rem'}}>
            Sort
            <Dropdown
              compact
              selection
              options={props.sortOptions}
              selectedLabel={sortOrder}
              value={sortOrder.value}
              style={{margin: '0 2rem 0 1rem'}}
              onChange={(e, data) => {
                let order=props.sortOptions.find(item => item.key === data.value);
                setSortOrder(order);
                if(typeof props.onSortOrderChanged == "function")
                  props.onSortOrderChanged(order);
              }}
            />
            Show
            <Dropdown
              compact
              selection
              options={props.amountOptions}
              selectedLabel={listingAmount}
              value={listingAmount.value}
              style={{margin: '0 0 0 1rem'}}
              onChange={(e, data) => {
                let amount=props.amountOptions.find(item => item.key === data.value);
                setListingAmount(amount);
                if(typeof props.onListingAmountChange == "function")
                  props.onListingAmountChange(amount);
              }}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  );
}

export default PaginationTop;