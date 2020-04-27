import React from 'react';
import { Link } from 'react-router-dom';
import './navcat.scss';

export default function NavCat(props) {
    return (<div className="navcat row justify-content-between flex-wrap collapse" id="rayons">
        {
            props.cat.map(category => (
                <div className="col-md-2 navcat__item rounded" key={`nav-${category.id}`} id={`navcat-${category.id}`}>
                    <Link to="/category/boissons"
                      >{category.name}</Link>
                </div>
            ))}
    </div>)

}