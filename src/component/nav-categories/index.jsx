import React from 'react';
import { NavLink } from 'react-router-dom';
import './navcat.scss';

export default function NavCat(props) {
    return (<div className="navcat row justify-content-between flex-wrap collapse" id="rayons">
        {
            props.cat.map(category =>  (
            <div className="col-md-2 navcat__item rounded" key={`nav-${category.id}`} id={`navcat-${category.id}`}>
                <NavLink catid={category.id} to={category.route}>{category.name}</NavLink>               
                </div>
            ))}
    </div>)

}