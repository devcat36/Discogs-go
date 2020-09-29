import React, {useLayoutEffect, useState} from 'react';
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
import AddRelease from "./Components/AddRelease";

function App() {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <div className="main-wrapper">
      <Router>
        <NavBar/>
        <div style={{minHeight:`${windowHeight-66}px`}}>
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
            <Route path={'/add'}><AddRelease/></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
