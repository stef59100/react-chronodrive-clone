import React from 'react';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';


import NavCat from '../nav-categories/index';
import catData from '../../data/categories.json';


import { ReactComponent as Click } from './click.svg';
import { ReactComponent as Percent } from './percent1.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as User } from './user1.svg';
import { ReactComponent as Burgerr } from './burgerr.svg';

import './header-nav.scss';
import { Navbar, Nav } from 'react-bootstrap';



// import CollapseDiv from '../../helpers/nav.js';
// import cart from '../cart';
// import Router from './../../Router';



const HeaderNav = () => {
    return (

        <Navbar bg="light" expand="lg" className="col-12 col-md-4">
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary text-white' />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto bg-primary-down-md">
                  
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
                    <Nav.Item as="li" >
                        <NavLink to="/promos" className="nav-link">
                            <div className="menu_icon user"><User /></div>
                            <span>Mon compte</span>
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>




    )
}
export default HeaderNav;
