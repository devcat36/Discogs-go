import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from "./Components/Menus/NavBar";
import StartPage from "./Components/StartPage";
import Footer from "./Components/Footer";
import Marketplace from "./Components/Marketplace";
import ItemDescription from "./Components/ItemDescription";

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path={'/'}><StartPage/></Route>
          <Route path={'/sell'}><Marketplace/></Route>
          <Route path={'/sell'}><Marketplace/></Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
