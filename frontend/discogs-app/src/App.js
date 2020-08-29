import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import './styles/common.css';
import './styles/Cart.css'
import './styles/ItemDescription.css'
import './styles/ItemListElement.css'
import './styles/ItemSidebar.css'
import './styles/SellerStore.css'
import './styles/StartPage.css'
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

function App() {
  return (
    <div className='main-wrapper'>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path={'/'}><StartPage/></Route>
        <Route path={'/sell/item'}><ItemDescription/></Route>
        <Route path={'/sell/order'}><Order/></Route>
        <Route exact path={'/sell/list'}><MarketplaceAllItems/></Route>
        <Route exact path={'/sell/cart'}><Cart/></Route>
        <Route exact path={'/sell/purchases'}><Purchases/></Route>
        <Route exact path={'/sell'}><ListForSale/></Route>
        <Route path={'/store'}><SellerStore/></Route>
      </Switch>
      <Footer/>
    </Router>
      </div>
  );
}

export default App;
