import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkoutpage';
import CategoryPage from './pages/categorypage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/promotions' component={HomePage} />
        <Route exact path='/nouveautes' component={HomePage} />
        <Route exact path='/boissons' render={(props)=><CategoryPage {...props}/> }/>
    </Switch>
)
export default Router;