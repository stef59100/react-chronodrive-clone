import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkoutpage';
import CategoryPage from './pages/categorypage';
import ProductPage from './pages/productpage';
import ProductListSub from './component/product-listing/product-list-subcategory';
import Subcategory from './component/product-listing/subbcatagory-list-class';



const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/promotions' component={HomePage} />
        <Route exact path='/nouveautes' component={HomePage} />
        <Route exact path='/category/:handle' component={CategoryPage}/>  
        <Route exact path='/category/subcategory/:handle' component={ProductListSub}/>        
        <Route exact path='/product/:productId' component={ProductPage} /> 

        <Route exact path='/testsub/:handle' component={Subcategory}/>    
    </Switch>
)
export default Router;