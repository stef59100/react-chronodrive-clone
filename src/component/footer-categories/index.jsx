import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './footer-cat.scss';

export default function FooterCat(props) {
    return (<div className="cat row justify-content-between mt-3">
        {
            props.cat.map(category => (
                <div className="col col-md-2 cat__item" key={category.id} id={category.id}>
                    <Link to={`/category/${category.id}`}>
                        <img src={category.img} alt={category.name} />
                        <p>
                            {category.name}
                        </p>
                    </Link>
                </div>
            ))}
    </div>)

}