import React, {createContext, useContext, useLayoutEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import './styles/common.css';
import './styles/Cart.css'
import './styles/ItemDescription.css'
import './styles/ItemListElement.css'
import './styles/ItemSidebar.css'
import './styles/SellerStore.css'
import './styles/StartPage.css'
import './styles/Explore.css'
import NavBar from "./Components/Menus/NavBar";
import StartPage from "./Components/StartPage";
import Footer from "./Components/Footer";
import ItemDescription from "./Components/ItemDescription";
import Order from "./Components/Order";
import MarketplaceAllItems from "./Components/MarketplaceAllItems";
import Cart from "./Components/Cart";
import Purchases from "./Components/Purchases";
import ListForSale from "./Components/ListForSale";
import SellerStore from "./Components/SellerStore";
import OrderSeller from "./Components/OrderSeller";
import ExploreMasters from "./Components/ExploreMasters";
import ExploreArtists from "./Components/ExploreArtists";
import MasterDescription from "./Components/MasterDescription";
import ReleaseDescription from "./Components/ReleaseDescription";
import ArtistDescription from "./Components/ArtistDescription";
import ContributeRelease from "./Components/ContributeRelease";
import ContributeMaster from "./Components/ContributeMaster";
import EditArtist from "./Components/EditArtist";
import Settings from "./Components/Settings";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {Auth0Provider} from "@auth0/auth0-react";

export const LoginContext = createContext({
  loggedIn: false, setLoggedIn: () => {
  }
});
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Auth0Provider
      domain="devcat.eu.auth0.com"
      clientId="1ZvtWOflRzD237bt1OhHaXMazLwMcceL"
      redirectUri={window.location.origin}
    >
      <ApolloProvider client={client}>
        <div className="main-wrapper">
          <Router>
            <NavBar/>
            <div style={{minHeight: `calc(100vh - 66px)`}}>
              <Switch>
                <Route exact path={'/'}><StartPage/></Route>
                <Route path={'/sell/item'}><ItemDescription/></Route>
                <Route path={'/sell/order'}><Order/></Route>
                <Route exact path={'/sell/list'}><MarketplaceAllItems/></Route>
                <Route exact path={'/sell/cart'}><Cart/></Route>
                <Route exact path={'/sell/purchases'}><Purchases/></Route>
                <Route exact path={'/sell/orders'}><OrderSeller/></Route>
                <Route exact path={'/sell'}><ListForSale/></Route>
                <Route path={'/store'}><SellerStore/></Route>
                <Route path={'/explore/master'}><ExploreMasters/></Route>
                <Route path={'/explore/artist'}><ExploreArtists/></Route>
                <Route path={'/master'}><MasterDescription/></Route>
                <Route path={'/release'}><ReleaseDescription/></Route>
                <Route path={'/artist'}><ArtistDescription/></Route>
                <Route path={'/add'}><ContributeRelease mode="add"/></Route>
                <Route exact path={'/m'}><ContributeMaster mode="add"/></Route>
                <Route exact path={'/a'}><EditArtist initialArtist={{name: 'Drake', pictures: []}}/></Route>
                <Route path="/settings"><Settings initialMode="User"
                                                  initialSettings={{user: {}, buyer: {}, seller: {}}}/></Route>
              </Switch>
            </div>
            <Footer/>
          </Router>
        </div>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
