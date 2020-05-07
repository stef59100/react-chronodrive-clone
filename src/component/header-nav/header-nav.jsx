import React from 'react';
import { NavLink } from 'react-router-dom';
import UserDropDown from './../user-dropdown/index';

import Collapsible from 'react-collapsible';


import NavCat from '../nav-categories/index';
import catData from '../../data/categories.json';


import { ReactComponent as Click } from './click.svg';
import { ReactComponent as Percent } from './percent1.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as User } from './user1.svg';
import { ReactComponent as Basket } from '../cart-header/basket2.svg';

import './header-nav.scss';
import { Navbar, Nav } from 'react-bootstrap';



// import CollapseDiv from '../../helpers/nav.js';
// import cart from '../cart';
// import Router from './../../Router';

const triggercontent = <> <div className="menu_icon user"><User /></div>
    <span>Mon compte</span>
</>


const HeaderNav = (props) => {
    return (

        <Navbar bg="primary" expand="lg" className="col-12 col-md-4 justify-content-end mb-3 mt-3 mb-md-0">

            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary text-white ' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto bg-primary-down-md">
                    <Nav.Item as="li">
                        <NavLink to="/categories/" className="nav-link">
                            <div className="menu_icon basket"><Basket /></div>
                            <span>Rayons</span></NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <NavLink to="/promos" className="nav-link">
                            <div className="menu_icon percent"><Percent /></div>
                            <span>Promotions</span></NavLink>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <NavLink to="/promos" className="nav-link">
                            <div className="menu_icon star"> <Star /></div>
                            <span>Favoris</span>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="li" >
                        <NavLink to="/promos" className="nav-link" >
                            <div className="menu_icon click"> <Click /></div>
                            <span>En 1 clic</span>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="user-dropdown">
                        <div className="nav-link">
                            <Collapsible className="user-dropdown" trigger={triggercontent} transitionCloseTime={500} triggerTagName='div' behavior="hover">

                                <UserDropDown  user={props.user} />

                            </Collapsible>
                        </div>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>




    )
}
export default HeaderNav;
