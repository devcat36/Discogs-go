import React, {useCallback, useState} from 'react';
import {Menu, Image, Input, Button, Container} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom';
import logo from '../../images/discogs-white.png';
import {FaShoppingCart} from 'react-icons/fa'

function NavBar(props) {
  const [activeItem, setActiveItem] = useState("");
  const [redirect, setRedirect] = useState({state: false, to: ''});
  const handleItemClick = useCallback((e, {name}) => {
    //setActiveItem(name);
    if (name === 'Home') setRedirect({state: true, to: '/'});
    else if (name === 'Buy Music') setRedirect({state: true, to: '/sell/list'});
    else if (name === 'cart') setRedirect({state: true, to: '/sell/cart'});
  });
  return (
    <>
      {redirect.state&&<Redirect push to={redirect.to}/>}
      <Menu inverted borderless style={{borderRadius: 0, marginBottom: 0}}>
        <Container style={{width: '1288px', padding: '0 10px 0 15px'}}>
          <Menu.Item as="a" header name={'Home'} onClick={handleItemClick}>
            <Image src={logo} style={{marginRight: '1.5em'}}/>
          </Menu.Item>
          <Menu.Item>
            <Input style={{width: 400}} className="icon" icon="search"
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
            <Menu.Item name="cart" onClick={handleItemClick}>
              <FaShoppingCart/>
            </Menu.Item>
            <Menu.Item
              name="Log In"
              onClick={handleItemClick}
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

