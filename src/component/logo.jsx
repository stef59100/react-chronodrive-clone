import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
    return (
        <div className="h3 logo mb-0">
            <NavLink to="/" className="nav-link home mb-0 p-0 mt-1">
                <span className="first-part">ReactJsStore</span>Drive meme
            </NavLink>
        </div>
    )
}