import React, {useCallback, useEffect, useRef, useState, useLayoutEffect} from "react";
import {
  Grid,
  Segment,
  Header,
  Button,
  Input,
  Dropdown,
  Item,
  Transition,
  List,
  Label,
  Form,
  Divider, TextArea
} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ManageTab from "./ManageTab";
import SpecificSearchInputField from "./SpecificSearchInputField";
import ListForSaleSearchItem from "./ListForSaleSearchItem";

const dummySearchItems = [
  {
    imgsrc: 'https://img.discogs.com/60DXtYbehMdNjPsLgk_gscGmbfA=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8512721-1463125837-1597.jpeg.jpg',
    artist: 'Kygo',
    title: 'Cloud Nine',
    labels: ['Sony Music', 'Ultra Records'],
    format: 'Vinyl',
    formatDescription: 'LP',
    year: 2016,
    country: 'Europe'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },
  {
    imgsrc: 'https://img.discogs.com/I7oP-bqwUzOZFzhlSEzEYw1rDmc=/150x150/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-12650515-1539350802-4391.jpeg.jpg',
    artist: 'Kygo',
    title: 'Kygo Hits Collection (2018)',
    labels: ['Ultra Records'],
    format: 'CD',
    formatDescription: 'Compilation',
    year: 2018,
    country: 'Japan'
  },

];
const dummyItemSelected = dummySearchItems[0];

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function ListForSale() {
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const [listItemVisible, setListItemVisible] = useState(false);

  const [windowWidth, windowHeight] = useWindowSize();

  const handleSearchButtonClick = useCallback(() => {
    setSearchResultVisible(true);
    setListItemVisible(false);
  }, []);

  const handleItemClick = useCallback(() => {
    setListItemVisible(true);
  }, []);


  return (
    <div className="contained listForSale">
      <ManageTab activeItem={'List Item For Sale'}/>
      <Grid divided columns="equal">
        <Grid.Column>
          <Header as="h3" attached="top" block style={{marginTop: '2px'}}>Search for item to sell</Header>
          <Segment attached textAlign="center">
            <Input action={{content: 'search', color: 'green', onClick: handleSearchButtonClick}}
                   placeholder="Search..." fluid
                   style={{maxWidth: '400px', margin: '0 auto 0 auto'}}/>
          </Segment>
          <Header as="h3" attached="top" block>Search by specific fields</Header>
          <Segment attached>
            <table style={{margin: '0 auto 0 auto', width: '100%'}}>
              <SpecificSearchInputField label={'Artist'}/>
              <SpecificSearchInputField label={'Title'}/>
              <SpecificSearchInputField label={'Catalog #'}/>
              <SpecificSearchInputField label={'Label'}/>
              <SpecificSearchInputField label={'Year'}/>
              <SpecificSearchInputField label={'Barcode'}/>
            </table>
            <Dropdown text="Search all release formats" selection fluid
                      style={{maxWidth: '320px', margin: '0.4rem 0 1rem 0'}}>
              <Dropdown.Menu>
                <Dropdown.Item text="Search all release formats"/>
                <Dropdown.Item text="Only search vinyl"/>
                <Dropdown.Item text="Only search CD"/>
                <Dropdown.Item text="Search all excluding vinyl and CD"/>
              </Dropdown.Menu>
            </Dropdown>
            <div style={{display: 'flex', marginTop: '2rem'}}>
              <Button icon="search" content="Search" color="green" style={{width: '8rem', marginRight: '1rem'}}
                      onClick={handleSearchButtonClick}/>
              <Button icon="refresh" content="Refresh" color="white" style={{width: '8rem', marginRight: '1rem'}}/>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Transition visible={searchResultVisible}>
            <div style={{overflow: 'auto', height: `${Math.max(windowHeight-190,600)}px`, paddingTop: '5px'}}>
              <Header as={'h4'} block>Showing 50 of 749</Header>
              <Item.Group unstackable style={{padding: '0 5px 0 5px'}}>
                {dummySearchItems.map(item => <ListForSaleSearchItem item={item} onClick={handleItemClick}/>)}
              </Item.Group>
            </div>
          </Transition>
        </Grid.Column>
        <Grid.Column>
          <Transition visible={listItemVisible}>
            <div style={{overflow: 'auto', height: `${Math.max(windowHeight-190,600)}px`}}>
              <Item.Group unstackable><Item>
                <Item.Image src={dummyItemSelected.imgsrc} size={'tiny'}/>
                <Item.Content>
                  <Header as={'h4'}>
                    <Link to={'/sell/item'}>{dummyItemSelected.artist}</Link>&nbsp;-&nbsp;
                    <Link>{dummyItemSelected.title}</Link><br/>
                  </Header>
                  <Item.Description>
                    {dummyItemSelected.labels.map(item => item + ', ')}<br/>
                    {dummyItemSelected.format}, {dummyItemSelected.formatDescription}
                    , {dummyItemSelected.year}, {dummyItemSelected.country}
                  </Item.Description>
                </Item.Content>
              </Item></Item.Group>
              <List bulleted>
                <List.Item>Last sold Jul 20, 2020 for €21.95</List.Item>
                <List.Item><b>31</b> for sale from €16.78</List.Item>
              </List>
              <Divider/>
              <Form>
                <Form.Field inline>
                  <Dropdown selection text="Media Condition"><Dropdown.Menu>
                    <Dropdown.Item>Mint (M)</Dropdown.Item>
                    <Dropdown.Item>Near Mint (NM or M-)</Dropdown.Item>
                    <Dropdown.Item>Very Good Plus (VG+)</Dropdown.Item>
                    <Dropdown.Item>Very Good (VG)</Dropdown.Item>
                    <Dropdown.Item>Good Plus (G+)</Dropdown.Item>
                    <Dropdown.Item>Good (G)</Dropdown.Item>
                    <Dropdown.Item>Fair (F)</Dropdown.Item>
                    <Dropdown.Item>Poor (P)</Dropdown.Item>
                  </Dropdown.Menu></Dropdown>
                </Form.Field>
                <Form.Field inline>
                  <Dropdown selection text="Sleeve Condition"><Dropdown.Menu>
                    <Dropdown.Item>Mint (M)</Dropdown.Item>
                    <Dropdown.Item>Near Mint (NM or M-)</Dropdown.Item>
                    <Dropdown.Item>Very Good Plus (VG+)</Dropdown.Item>
                    <Dropdown.Item>Very Good (VG)</Dropdown.Item>
                    <Dropdown.Item>Good Plus (G+)</Dropdown.Item>
                    <Dropdown.Item>Good (G)</Dropdown.Item>
                    <Dropdown.Item>Fair (F)</Dropdown.Item>
                    <Dropdown.Item>Poor (P)</Dropdown.Item>
                  </Dropdown.Menu></Dropdown>
                  <Label pointing="left">Optional</Label>
                </Form.Field>
                <Form.Field>
                  Item condition comments
                  <TextArea placeholder="e.g. Great Shape, slightly worn edges, plays perfect"/>
                </Form.Field>
                <Form.Field>
                  Item location
                  <TextArea placeholder="e.g. Upper Stacks - Aisle 5 Row 4"/>
                </Form.Field>
                <Form.Field>
                  Private comments
                  <TextArea placeholder="e.g. Free-form comments, reminders, etc."/>
                </Form.Field>
                <Form.Field>
                  Price in USD <Link>(change currency)</Link>
                  <Input fluid style={{width: '15rem'}}/>
                </Form.Field>
                <Divider/>
                <Header as="h3">Shipping Information</Header>
                <Form.Field>
                  <Input
                    label={{basic: true, content: 'grams'}}
                    labelPosition="right"
                    placeholder={'Item weight'}
                    style={{width: '20rem'}}
                    fluid
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label={{basic: true, content: 'Items'}}
                    labelPosition="right"
                    placeholder={'Count as...'}
                    style={{width: '20rem'}}
                    fluid
                  />
                </Form.Field>
                <Form.Field>
                  <Button icon={'check'} color={'green'} content="List For Sale"/>
                </Form.Field>
                By clicking "List For Sale", you accept our <Link>Sales & Transactions Policy</Link>.
              </Form>
            </div>
          </Transition>
        </Grid.Column>
      </Grid>
    </div>);
}

export default ListForSale;