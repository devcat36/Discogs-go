import React from "react";
import {Divider, Grid, Icon, Menu, Table} from "semantic-ui-react";
import FilterSidebar from "./FilterSidebar";
import ExploreTab from "./ExploreTab";
import PaginationTop from "./PaginationTop";
import ExploreItem from "./ExploreItem";
import {Link} from "react-router-dom";

const amountOptions = [
  {key: '25', text: '25', value: '25'},
  {key: '50', text: '50', value: '50'},
  {key: '100', text: '100', value: '100'},
  {key: '200', text: '200', value: '200'}
];

const sortOptions = [
  {key: 'Latest Additions', text: 'Latest Additions', value: 'Latest Additions'},
  {key: 'Latest Edits', text: 'Latest Edits', value: 'Latest Edits'},
  {key: 'Title, A-Z', text: 'Title, A-Z', value: 'Title, A-Z'},
  {key: 'Title, Z-A', text: 'Title, Z-A', value: 'Title, Z-A'}
];

const dummyItems = [
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },
  {
    imgsrc: 'https://img.discogs.com/_ievSVXXd7FWpNCSBVxnm4BtJiw=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-103687-1566559661-6275.jpeg.jpg',
    title: 'Dire Straits',
  },


];

function ExploreArtists() {
  return (<>
    <div className="contained Explore">
      <Grid>
        <Grid.Column width={3}>
          <FilterSidebar
            type="explore"
          />
          <div style={{marginLeft: '5px'}}><Link><Icon name="question circle"/> Help on Searching</Link></div>
        </Grid.Column>
        <Grid.Column width={13}>
          <ExploreTab activeItem="Artist"/>
          <PaginationTop sortOptions={sortOptions} amountOptions={amountOptions}/>
          <Divider/>
          <div className="ItemContainer">
            {dummyItems.map(item=><ExploreItem item={item}/>)}
          </div>
          <Divider/>
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
        </Grid.Column>
      </Grid>
    </div>
  </>);
}

export default ExploreArtists;