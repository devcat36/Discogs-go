import React from "react";
import { Menu, Dropdown, Header } from "semantic-ui-react";

function PaginationTop({
  sortOptions,
  amountOptions,
  listingAmount,
  sortOrder,
  onSortOrderChanged,
  onListingAmountChanged,
  label,
  header,
  startIndex,
  endIndex,
  total,
}) {
  return (
    <Menu borderless>
      <Menu.Item>
        {typeof header == "undefined" ? (
          <Header as={"h5"}>
            Showing&nbsp;&nbsp;{startIndex.toLocaleString()}
            &nbsp;&nbsp;–&nbsp;&nbsp;
            {endIndex.toLocaleString()}&nbsp;&nbsp;of&nbsp;&nbsp;
            {total.toLocaleString()}
          </Header>
        ) : (
          header
        )}
      </Menu.Item>
      <Menu.Menu position={"right"}>
        <Menu.Item style={{ padding: "0.5rem 1rem 0.5rem 1rem" }}>
          {typeof sortOptions != "undefined" && (
            <>
              Sort
              <Dropdown
                compact
                selection
                options={sortOptions}
                value={sortOrder}
                style={{ margin: "0 2rem 0 1rem" }}
                onChange={(e, data) => {
                  let order = sortOptions.find(
                    (item) => item.key === data.value
                  );
                  if (typeof onSortOrderChanged == "function")
                    onSortOrderChanged(order);
                }}
              />
            </>
          )}
          {typeof amountOptions != "undefined" && (
            <>
              Show
              <Dropdown
                compact
                selection
                options={amountOptions}
                // selectedLabel={listingAmount}
                value={listingAmount}
                style={{ margin: "0 0 0 1rem" }}
                onChange={(e, data) => {
                  let amount = amountOptions.find(
                    (item) => item.key === data.value
                  );
                  // setListingAmount(amount);
                  if (typeof onListingAmountChange == "function")
                    onListingAmountChanged(amount);
                }}
              />
            </>
          )}
        </Menu.Item>
        {typeof label != "undefined" && <Menu.Item>{label}</Menu.Item>}
      </Menu.Menu>
    </Menu>
  );
}

export default PaginationTop;
