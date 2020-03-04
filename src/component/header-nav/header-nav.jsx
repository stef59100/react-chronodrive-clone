import React from 'react';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';


import NavCat from '../nav-categories/index';
import catData from '../../data/categories.json';

import { ReactComponent as Basket2 } from './basket2.svg';
import { ReactComponent as Click} from './click.svg';
import { ReactComponent as Percent } from './percent1.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as User} from './user1.svg';

import './header-nav.scss';


// import CollapseDiv from '../../helpers/nav.js';
// import cart from '../cart';
// import Router from './../../Router';
import Cart from './../cart/index';

const HeaderNav = ({ cart }) => {
    // CollapseDiv();
    return (
        <>
            <nav className="navbar navbar-expand-lg col  justify-content-around">
                <a className="navbar-brand" href="#">

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item basket-2">
                            <NavLink to="#rayons" className="nav-link d-flex align-items-center" role="button" data-toggle="#rayons"><Basket2/><span>Rayons</span></NavLink>
                        </li>
                        <li className="nav-item percent">
                            <NavLink to="/" className="nav-link "><Percent/></NavLink>
                        </li>
                        <li className="nav-item star">
                            <NavLink to="/" className="nav-link "><Star/></NavLink>
                        </li>
                        <li className="nav-item click">
                            <NavLink to="/" className="nav-link "><Click/></NavLink>
                        </li>
                        <li className="nav-item user" >
                            <NavLink to="/checkout" className="nav-link "><User/></NavLink>
                        </li>
                        <li className="nav-item cart">
                            <NavLink to="/cart" className="nav-link "><Basket2/> ({cart.reduce((acc,item)=>{
                                let price = (item.specialprice!== "")?item.specialprice:item.price;
                                let total = parseFloat(acc) + parseFloat(item.quantity) * parseFloat(price)
                          
                                return total.toFixed(2)
                            }, 0)} €)</NavLink>
                            <Collapsible>                                
                                <Cart />
                            </Collapsible>
                        </li>
                    </ul>
                </div>
            </nav>
            <NavCat cat={catData.categories}></NavCat>
        </>

    )
}
export default HeaderNav;
