import React from "react";
import { Table } from "semantic-ui-react";
import { CONDITION_OPTIONS, COUNTRY_OPTIONS } from "../constants";
import ItemListElement from "./ItemListElement";
import PaginationMenu from "./PaginationMenu";
import PaginationTop from "./PaginationTop";

const amountOptions = [
  { key: "25", text: "25", value: 25 },
  { key: "50", text: "50", value: 50 },
  { key: "100", text: "100", value: 100 },
  { key: "200", text: "200", value: 200 },
];

const sortOptions = [
  { key: "Listed Newest", text: "Listed Newest", value: "Listed Newest" },
  { key: "Listed Oldest", text: "Listed Oldest", value: "Listed Oldest" },
  {
    key: "Condition (M)-(P)",
    text: "Condition (M)-(P)",
    value: "Condition (M)-(P)",
  },
  {
    key: "Condition (P)-(M)",
    text: "Condition (P)-(M)",
    value: "Condition (P)-(M)",
  },
  { key: "Artist A-Z", text: "Artist A-Z", value: "Artist A-Z" },
  { key: "Artist Z-A", text: "Artist Z-A", value: "Artist Z-A" },
  { key: "Title A-Z", text: "Title A-Z", value: "Title A-Z" },
  { key: "Title Z-A", text: "Title Z-A", value: "Title Z-A" },
  { key: "Price Lowest", text: "Price Lowest", value: "Price Lowest" },
  { key: "Price Highest", text: "Price Highest", value: "Price Highest" },
];

const image_placeholder = "";

function ItemList({
  items,
  total,
  showCount,
  page,
  sortOrder,
  onPageSelected,
  onSortOrderSelected,
  onShowCountSelected,
}) {
  const startIndex = (page - 1) * showCount + 1;
  return (
    <>
      <PaginationTop
        amountOptions={amountOptions}
        sortOptions={sortOptions}
        listingAmount={showCount}
        startIndex={startIndex}
        endIndex={startIndex + items.length - 1}
        total={total}
        sortOrder={sortOrder}
        onSortOrderChanged={onSortOrderSelected}
        onListingAmountChanged={onShowCountSelected}
      />
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Seller</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <ItemListElement
              key={item.id}
              imgsrc={
                item.image.length > 0
                  ? item.image
                  : item.release.image.length > 0
                  ? item.release.image[0]
                  : image_placeholder
              }
              listedName={`${
                item.release.artist.length > 1
                  ? "Variois Artists"
                  : item.release.artist[0].name
              } - ${item.release.title} (${item.release.format})`}
              mediaCondition={
                CONDITION_OPTIONS.find(
                  (option) => option.value === item.mediaCondition
                ).text
              }
              sleeveCondition={
                CONDITION_OPTIONS.find(
                  (option) => option.value === item.sleeveCondition
                ).text
              }
              comments={item.comments}
              seller={item.seller.userName}
              country={
                COUNTRY_OPTIONS.find(
                  (option) =>
                    option.value === item.seller.sellerSettings.country
                ).text
              }
              currency={item.price.currency}
              price={item.price.value}
              shipping={item.shipping.value}
              releaseId={item.release.id}
              itemId={item.id}
            />
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={4}>
              <PaginationMenu
                onPageSelected={onPageSelected}
                page={page}
                itemLength={total}
                listingAmount={showCount}
                maxLength={6}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
}

export default ItemList;
