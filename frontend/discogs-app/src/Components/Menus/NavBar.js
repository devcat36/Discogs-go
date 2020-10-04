import React, {useCallback, useState} from 'react';
import {Menu, Image, Input, Button, Container, Icon} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom';
import logo from '../../images/discogs-white.png';
import {useAuth0} from "@auth0/auth0-react";

function NavBar(props) {
  const [activeItem, setActiveItem] = useState("");
  const history = useHistory();
  const {loginWithRedirect} = useAuth0();
  const handleItemClick = useCallback((e, {name}) => {
    //setActiveItem(name);
    if (name === 'Home') history.push('/');
    else if (name === 'Explore') history.push('/explore/master');
    else if (name === 'Buy Music') history.push('/sell/list');
    else if (name === 'cart') history.push('/sell/cart');
    else if (name === 'Sell Music') history.push('/sell')
  });
  return (
    <>
      <Menu inverted borderless style={{borderRadius: 0, marginBottom: 0}}>
        <Container style={{width: '1288px', padding: '0'}}>
          <Menu.Item header name={'Home'}>
            <Image src={logo} style={{marginRight: '1.5em', cursor: 'pointer'}}
                   onClick={() => handleItemClick(null, {name: 'Home'})}/>
          </Menu.Item>
          <Menu.Item style={{width: 'calc(100% - 900px)', minWidth: '300px'}}>
            <Input style={{width: '100%'}} className="icon" icon="search"
                   placeholder="Search artists, albums and more..."/>
          </Menu.Item>
          <Menu.Item
            name="Explore"
            active={activeItem === 'Explore'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Buy Music"
            active={activeItem === 'Buy Music'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Sell Music"
            active={activeItem === 'Sell Music'}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item name="cart" style={{padding: 0}}>
              <div
                style={{
                  cursor: 'pointer',
                  height: '100%',
                  width: '4rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => handleItemClick(null, {name: 'cart'})}
              ><Icon name={'cart'}/></div>
            </Menu.Item>
            <Menu.Item
              name="Log In"
              onClick={()=>loginWithRedirect()}
            />
            <Menu.Item name="Register">
              <Button color="green" style={{height: 35}}>Register</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default NavBar;

