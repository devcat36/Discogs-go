import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Switch, Route,Link, Redirect, useHistory} from 'react-router-dom';
import {Menu, Header, Input, Grid, Image, Label, GridColumn} from 'semantic-ui-react'
import './Marketplace.css'
import MarketplaceAllItems from "./MarketplaceAllItems";
import Cart from "./Cart";

function Marketplace() {
  const [props, setprops] = useState({activeItem: 'All Items'});
  return (
    <div className={"Marketplace"}>
      <Switch>
        <Route exact path={'/sell/list'}>{<MarketplaceAllItems/>}</Route>
        <Route exact path={'/sell/cart'}>{<Cart/>}</Route>
      </Switch>
    </div>
  );
}

export default Marketplace;