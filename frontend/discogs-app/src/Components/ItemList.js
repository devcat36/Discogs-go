import React, {useState} from "react";
import {Table, Label, Menu, Icon, Segment, Header, Dropdown} from "semantic-ui-react";
import ItemListElement from "./ItemListElement";
import PaginationTop from "./PaginationTop";

const amountOptions = [
  {key: '25', text: '25', value: '25'},
  {key: '50', text: '50', value: '50'},
  {key: '100', text: '100', value: '100'},
  {key: '200', text: '200', value: '200'}
];

const sortOptions = [
  {key: 'Listed Newest', text: 'Listed Newest', value: 'Listed Newest'},
  {key: 'Listed Oldest', text: 'Listed Oldest', value: 'Listed Oldest'},
  {key: 'Condition (M)-(P)', text: 'Condition (M)-(P)', value: 'Condition (M)-(P)'},
  {key: 'Condition (P)-(M)', text: 'Condition (P)-(M)', value: 'Condition (P)-(M)'},
  {key: 'Artist A-Z', text: 'Artist A-Z', value: 'Artist A-Z'},
  {key: 'Artist Z-A', text: 'Artist Z-A', value: 'Artist Z-A'},
  {key: 'Title A-Z', text: 'Title A-Z', value: 'Title A-Z'},
  {key: 'Title Z-A', text: 'Title Z-A', value: 'Title Z-A'},
  {key: 'Price Lowest', text: 'Price Lowest', value: 'Price Lowest'},
  {key: 'Price Highest', text: 'Price Highest', value: 'Price Highest'},
];

function ItemList(props) {
  return (
    <>
      <PaginationTop
        amountOptions={amountOptions}
        sortOptions={sortOptions}
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
          <ItemListElement
            imgsrc={'https://img.discogs.com/AY-fpz65XBip08dlD31HfmpTV40=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12862136-1582477074-1716.jpeg.jpg'}
            listedName={'Rita Ora - Phoenix (CD, Album, Ltd)'}
            label={['Atlantic', 'Atlantic']}
            mediaCondition={'Mint (M)'}
            sleeveCondition={'Mint (M)'}
            seller={'KUPIKU-COM'}
            country={'Japan'}
            currency={'CHF'}
            price={31.67}
            shipping={8.10}
          />
          <ItemListElement
            imgsrc={'https://img.discogs.com/mGxu680VUe0mzFiaU5akD6R1SVU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-852079-1494591916-6333.jpeg.jpg'}
            listedName={'Sting - The Soul Cages (CD, Maxi)'}
            label={['A&M Records']}
            mediaCondition={'Very Good Plus (VG+)'}
            sleeveCondition={'Very Good Plus (VG+)'}
            seller={'soulsounds65'}
            country={'United States'}
            currency={'USD'}
            price={8.99}
            shipping={8.10}
          />
          <ItemListElement
            imgsrc={'https://img.discogs.com/VwM8g8JA5YIoQSN-D1a7jIOUN7U=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14532271-1576487077-9351.jpeg.jpg'}
            listedName={'Laxmikant Pyarelal* • Anand Bakshi - Farz (7", EP)'}
            label={['Angel Records']}
            mediaCondition={'Mint (M)'}
            sleeveCondition={'Mint (M)'}
            seller={'KUPIKU-COM'}
            country={'Japan'}
            currency={'CHF'}
            price={16.67}
            shipping={8.10}
          />
          <ItemListElement
            imgsrc={'https://img.discogs.com/ck00rRwLMekRcyqNCyau4PWZ1ls=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8426093-1461370675-8802.jpeg.jpg'}
            listedName={'La 5ta Galaxia - 5ta Galaxia (LP, Album)'}
            label={['Sono-Rodven']}
            mediaCondition={'Mint (M)'}
            sleeveCondition={'Mint (M)'}
            seller={'roxanmusic'}
            country={'India'}
            currency={'EUR'}
            price={21.67}
            shipping={4.10}
          />
          <ItemListElement
            imgsrc={'https://img.discogs.com/Vqf3aSPi94JGIz4wpshQ22ey4z4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1065960-1421225588-7885.jpeg.jpg'}
            listedName={'Santana - Abraxas (LP, Album, San)'}
            label={['Atlantic', 'Atlantic']}
            mediaCondition={'Mint (M)'}
            sleeveCondition={'Mint (M)'}
            seller={'Studebakerhawk'}
            country={'Japan'}
            currency={'CHF'}
            price={31.67}
            shipping={8.10}
          />

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left"/>
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right"/>
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
}

export default ItemList;