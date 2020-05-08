import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkoutpage';
import SubcategoryPage from './pages/subcategorypage';
import ProductPage from './pages/productpage';
import ProductListSub from './component/product-listing/product-list-subcategory';
import Subcategory from './component/product-listing/subbcatagory-list-class';
import CategoryPage from './pages/categorypage';

import UserLogin from './pages/loginpage';



const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/promotions' component={HomePage} />
        <Route exact path='/nouveautes' component={HomePage} />
        <Route exact path='/categories/' component={CategoryPage}/>  
        <Route exact path='/category/:handle' component={SubcategoryPage}/>  
        <Route exact path='/category/subcategory/:handle' component={ProductListSub}/>        
        <Route exact path='/product/:productId' component={ProductPage} />

         <Route exact path='/user/:userId/account' component={UserLogin} />  

        <Route exact path='/testsub/:handle' component={Subcategory}/>    
    </Switch>
)
export default Router;