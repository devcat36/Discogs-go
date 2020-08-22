import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Switch, Route,Link, Redirect, useHistory} from 'react-router-dom';
import './Marketplace.css'
import MarketplaceAllItems from "./MarketplaceAllItems";
import Cart from "./Cart";
import Purchases from "./Purchases";
import ItemDescription from "./ItemDescription";

function Marketplace() {
  return (
    <div className={"Marketplace"}>
      <Switch>
        <Route path={'/sell/item'}>{<ItemDescription/>}</Route>
        <Route exact path={'/sell/list'}>{<MarketplaceAllItems/>}</Route>
        <Route exact path={'/sell/cart'}>{<Cart/>}</Route>
        <Route exact path={'/sell/purchases'}>{<Purchases/>}</Route>
      </Switch>
    </div>
  );
}

export default Marketplace;