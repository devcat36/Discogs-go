import React, {useCallback} from "react";
import {Header, Input, Menu} from "semantic-ui-react";
import {useHistory, Link} from 'react-router-dom';

function ExploreTab(props) {
  const history = useHistory();
  const handleItemClick = useCallback((e, {name}) => {
    if (name === 'Master') history.push('/explore/master');
    else if(name==='Artist')history.push('/explore/artist');
  }, [history]);
  return (
    <Menu tabular>
      <Menu.Item
        name="Master"
        active={props.activeItem === 'Master'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Artist"
        active={props.activeItem === 'Artist'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item><Link to={'/sell/list'}>Search Marketplace</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default ExploreTab;