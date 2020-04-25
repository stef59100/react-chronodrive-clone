import React from 'react';
import Cart from '../component/cart'
import catData from '../data/categories.json';
import FooterCat from './../component/footer-categories/index';


export default function CartPage(props) {
     return <div>
          <h1>This is the cart</h1>
          <Cart />
          <FooterCat cat={catData.categories}></FooterCat>
          

     </div>

}