import React, {useCallback, useContext, useState, useEffect} from 'react';
import {Menu, Image, Input, Button, Container, Icon, Dropdown} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom';
import {useQuery, gql, useLazyQuery} from '@apollo/client';
import {useAuth0} from "@auth0/auth0-react";
import useToken from "../../hooks/useToken";
import logo from '../../images/discogs-white.png';
import MainSearchBar from "../MainSearchBar";

const USER = gql`
    query NavbarProfile($id: ID!){
        user(id:$id, isToken: true){
            userName
            image
        }
    }
`;

function NavBar(props) {
  const history = useHistory();
  const handleItemClick = useCallback((e, {name}) => {
    if (name === 'Home') history.push('/');
    else if (name === 'Explore') history.push('/explore/master');
    else if (name === 'Buy Music') history.push('/sell/list');
    else if (name === 'cart') history.push('/sell/cart');
    else if (name === 'Sell Music') history.push('/sell')
  }, [history]);
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
  const [getData, {data}] = useLazyQuery(USER);
  const token = useToken();
  useEffect(() => {
    token && getData({variables: {id:token[1]}});
  },[token, getData]);
  return (
    <>
      <Menu inverted borderless style={{borderRadius: 0, marginBottom: 0}}>
        <Container style={{width: '1288px', padding: '0'}}>
          <Menu.Item header name={'Home'}>
            <Image src={logo} style={{marginRight: '1.5em', cursor: 'pointer'}}
                   onClick={() => handleItemClick(null, {name: 'Home'})}/>
          </Menu.Item>
          <Menu.Item style={{width: 'calc(100% - 800px)', minWidth: '300px'}}>
            <MainSearchBar/>
          </Menu.Item>
          <Menu.Item
            name="Explore"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Buy Music"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Sell Music"
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="cart"
              onClick={() => handleItemClick(null, {name: 'cart'})}
            >
              <Icon name={'cart'}/>
            </Menu.Item>
            {!isAuthenticated && <Menu.Item
              name="Log In"
              onClick={() => loginWithRedirect()}
            />}
            {!isAuthenticated && <Menu.Item name="Register">
              <Button color="green" style={{height: '35px'}}>Register</Button>
            </Menu.Item>}
            {isAuthenticated && <Menu.Item name="message" onClick={() => {
            }}>
              <Icon name="mail"/>
            </Menu.Item>}
            {isAuthenticated && <Menu.Item>
              <Dropdown
                trigger={<span><Image avatar
                                      src={data && data.user.image}/> {data && data.user.userName}</span>}
                pointing="top left"
                icon={null}
              >
                <Dropdown.Menu>
                  <Dropdown.Item icon="user" text="Account" onClick={() => {
                  }}/>
                  <Dropdown.Item icon="settings" text="Settings" onClick={() => {
                  }}/>
                  <Dropdown.Item icon="sign-out" text="Sign Out" onClick={() => {
                    logout({returnTo: window.location.origin})
                  }}/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>}
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default NavBar;

