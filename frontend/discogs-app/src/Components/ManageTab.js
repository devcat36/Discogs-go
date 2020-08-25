import React, {useCallback} from "react";
import {Header, Input, Menu} from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

function ManageTab(props){
    const history = useHistory();
    const handleItemClick = useCallback((e, {name}) => {
      if(name==='List Item For Sale')history.push('/sell');
      // else if(name==='Purchases')history.push('/sell/purchases');
      // else if(name==='Cart')history.push('/sell/cart');
    }, [history]);
  return(
    <Menu tabular style={{marginBottom:'2rem'}}>
        <Menu.Item><Header as="h2">Manage</Header></Menu.Item>
        <Menu.Item
          name="Orders"
          active={props.activeItem === 'Orders'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Billing"
          active={props.activeItem === 'Billing'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="List Item For Sale"
          active={props.activeItem === 'List Item For Sale'}
          onClick={handleItemClick}
        />
      </Menu>
  );
}

export default ManageTab;