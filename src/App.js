import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home.js'
import About from './pages/about.js'
import { BackgroundContextProvider } from './data/backgroundContext.js'
import { CategoryProvider } from './data/categoryContext.js'
import Nav from './elements/nav.js'
import Shop from './pages/shop.js'
import ItemPage from './pages/itemPage.js'
import { ShoppingCartContextProvider } from './data/shoppingCartContext.js'
import ShoppingCart from './pages/shoppingCart.js'


function App() {

    useEffect(() => {
        document.title = "MySite"
    });

    return (    
            <Router>
                <Nav />
              <Switch>
                <BackgroundContextProvider>
                    <ShoppingCartContextProvider>
                    <Route path='/' component={Home} exact />
                    <CategoryProvider>
                    <Route path='/shop' component={Shop} exact />
                    </CategoryProvider>
                    <Route path='/about' component={About} exact />
                    <Route path='/cart' component={ShoppingCart} exact />
                    <Route path='/shop/:id' component={ItemPage} exact />
                    </ShoppingCartContextProvider>
                </BackgroundContextProvider>
              </Switch>
            </Router>
    );  
  
}

export default App;
