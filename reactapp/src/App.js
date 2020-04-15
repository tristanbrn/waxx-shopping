import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Product from './components/Product'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} exact/>
          <Route path="/shop" component={Shop} exact/>
          <Route path="/shop/:id" component={Product} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;