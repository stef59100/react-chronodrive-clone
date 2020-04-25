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
       
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary text-white'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item as="li" >
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        </Nav.Item>
                        <Nav.Item as="li" className='percent'>
                            <NavLink to="/promos" className="nav-link"><Percent /></NavLink>
                        </Nav.Item>
                        <Nav.Item as="li" className='star'>
                            <NavLink to="/promos" className="nav-link"><Star /></NavLink>
                        </Nav.Item>
                        <Nav.Item as="li" className='click'>
                            <NavLink to="/promos" className="nav-link" ><Click /></NavLink> </Nav.Item>
                        <Nav.Item as="li" className='user'>
                            <NavLink to="/promos" className="nav-link"><User /></NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           

      

    )
}
export default HeaderNav;
