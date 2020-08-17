import React, {useCallback} from "react";
import {Header, Input, Menu} from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function MarketplaceTab(props){
    const history = useHistory();
    const handleItemClick = useCallback((e, {name}) => {
    if(name==='All Items')history.push('/sell/list');
    else if(name==='Cart')history.push('/sell/cart');
  }, [history]);
  return(
    <Menu tabular>
        <Menu.Item><Header as="h2">Marketplace</Header></Menu.Item>
        <Menu.Item
          name="All Items"
          active={props.activeItem === 'All Items'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Purchases"
          active={props.activeItem === 'Purchases'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Cart"
          active={props.activeItem === 'Cart'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Buyer Settings"
          active={props.activeItem === 'Buyer Settings'}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search Marketplace"/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  );
}

export default MarketplaceTab;