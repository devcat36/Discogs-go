import React from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

function PaginationFooter({
  onPageSelected,
  page,
  itemLength,
  listingAmount,
  maxLength,
}) {
  const lastPage =
    ((itemLength / listingAmount) >> 0) + (itemLength % listingAmount ? 1 : 0);
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan={4}>
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon onClick={() => onPageSelected(1)}>
              <Icon name="chevron left" />
            </Menu.Item>
            {[...Array(Math.min(maxLength, lastPage))].map((e, index) => (
              <Menu.Item
                key={index}
                as="a"
                onClick={() => onPageSelected(Math.max(page - 2, 1) + index)}
              >
                {Math.max(page - 1, 1) + index}
              </Menu.Item>
            ))}
            <Menu.Item as="a" icon>
              <Icon
                name="chevron right"
                onClick={() => onPageSelected(lastPage)}
              />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
}

export default PaginationFooter;
