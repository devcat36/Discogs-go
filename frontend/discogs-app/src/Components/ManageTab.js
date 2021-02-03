import React, {useCallback} from "react";
import {Header, Input, Menu} from "semantic-ui-react";
import {useHistory, Link} from 'react-router-dom';

function ManageTab(props) {
  const history = useHistory();
  const handleItemClick = useCallback((e, {name}) => {
    if (name === 'List Item For Sale') history.push('/sell');
    else if(name==='Orders')history.push('/sell/orders');
  }, [history]);
  return (
    <Menu tabular style={{marginBottom: '2rem'}}>
      <Menu.Item><Header as="h2">Manage</Header></Menu.Item>
      <Menu.Item
        name="Orders"
        active={props.activeItem === 'Orders'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="List Item For Sale"
        active={props.activeItem === 'List Item For Sale'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item><Link>Seller Settings</Link></Menu.Item>
        <Menu.Item><Link to={'/store'}>My Store</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default ManageTab;