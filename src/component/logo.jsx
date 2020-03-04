import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="h1 logo">
        <NavLink to="/" className="nav-link home">Drive</NavLink>
        </div>
    )
}