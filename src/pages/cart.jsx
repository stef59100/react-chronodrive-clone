import React from 'react';
import Cart from '../component/cart'

const clearCart =() => {}
export default function CartPage(props) {
     return <div>
          <h1>This is the cart</h1>
          <Cart />
          <button onClick={()=>clearCart()}>Supprimer le panier</button>

     </div>

}