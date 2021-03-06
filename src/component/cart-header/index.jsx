import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Basket2 } from './basket2.svg';
import Cart from './../cart/index';
import './cartheader.scss';

const CartHeader = ({ cart }) => {
   return ( <div className="header__cart row justify-content-end mt-md-4 mb-3 mb-md-0 ">
       <div className='header__cart__inside'>
            <NavLink to="/cart" className="nav-link "><Basket2 /> {cart.reduce((acc, item) => {
                let price = (item.specialprice !== "") ? item.specialprice : item.price;
                let total = parseFloat(acc) + parseFloat(item.quantity) * parseFloat(price)
    
                return total.toFixed(2)
            }, 0)} €</NavLink>
        </div>
   </div>)
}
export default CartHeader;
