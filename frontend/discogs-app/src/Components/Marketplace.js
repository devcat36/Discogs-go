import React, {useCallback, useState} from 'react';
import {Menu, Header, Input, Grid, Image, Label, GridColumn} from 'semantic-ui-react'
import './Marketplace.css'
import FilterSidebar from "./FilterSidebar";
import MarketplaceAllItems from "./MarketplaceAllItems";

function Marketplace() {
  const [opentab, setOpentab] = useState({activeItem: 'All Items'});
  const handleItemClick = useCallback((e, {name}) => {
    setOpentab({activeItem: name});
    console.log(name);
  }, []);
  return (
    <div className={"Marketplace"}>
      <Menu tabular>
        <Menu.Item><Header as="h2">Marketplace</Header></Menu.Item>
        <Menu.Item
          name="All Items"
          active={opentab.activeItem === 'All Items'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Items I Want"
          active={opentab.activeItem === 'Items I Want'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Purchases"
          active={opentab.activeItem === 'Purchases'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Cart"
          active={opentab.activeItem === 'Cart'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Buyer Settings"
          active={opentab.activeItem === 'Buyer Settings'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search Marketplace"/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <MarketplaceAllItems/>
    </div>
  );
}

export default Marketplace;