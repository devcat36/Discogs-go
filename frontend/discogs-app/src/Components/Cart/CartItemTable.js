import React from 'react';
import { Header, Table, Item, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { CONDITION_OPTIONS, CURRENCY_SYMBOL, getTextWithValueInOptions } from '../../constants';

const styles = {
  itemHeader: {
    fontSize: '1.1rem !important',
  },
};

export default function CartItemTable({ items }) {
  const TableRows = items.map((item) => {
    const imgsrc = item.image[0];
    const title = `
      ${item.release.artist[0].name} - 
      ${item.release.title} (
      ${item.release.format}, 
      ${item.release.formatSpec.map((spec) => spec.value).join(', ')})`;
    const price = CURRENCY_SYMBOL[item.price.currency] + item.price.value.toFixed(2);
    const mediaCondition = getTextWithValueInOptions(item.mediaCondition, CONDITION_OPTIONS);
    const sleeveCondition = getTextWithValueInOptions(item.sleeveCondition, CONDITION_OPTIONS);
    return (
      <Table.Row>
        <Table.Cell>
          <Item.Group unstackable>
            <Item>
              <Item.Image size="tiny" src={imgsrc} />
              <Item.Content>
                <Item.Header as="a" style={styles.itemHeader}>
                  <Link to={'/marketplace/item/' + item.id}>{title}</Link>
                </Item.Header>
                <Item.Meta>Media: {mediaCondition}</Item.Meta>
                <Item.Meta>Sleeve: {sleeveCondition}</Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Table.Cell>
        <Table.Cell>
          <Header as="h4" color="red">
            {price}
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Icon name="trash alternate outline" color="grey" />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Table basic="very'" unstackable>
      <Table.Body>{TableRows}</Table.Body>
    </Table>
  );
}
