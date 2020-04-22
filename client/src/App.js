import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Product from './components/Product'
import Success from './components/Success'
import Cancel from './components/Cancel'

function App() {
  return (
    <HashRouter>     
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} exact/>
          <Route path="/shop" component={Shop} exact/>
          <Route path="/shop/:id" component={Product} exact/>
          <Route path="/success" component={Success} exact/>
          <Route path="/cancel" component={Cancel} exact/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;