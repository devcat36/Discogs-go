import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Switch, Route,Link, Redirect, useHistory} from 'react-router-dom';
import './Marketplace.css'
import MarketplaceAllItems from "./MarketplaceAllItems";
import Cart from "./Cart";
import Purchases from "./Purchases";
import ItemDescription from "./ItemDescription";
import Order from "./Order";

function Marketplace() {
  return (
    <div className={"Marketplace"}>
      <Switch>
      </Switch>
    </div>
  );
}

export default Marketplace;