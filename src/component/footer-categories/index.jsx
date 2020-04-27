import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './footer-cat.scss';

export default function FooterCat(props) {
    return (<div className="cat row justify-content-start">
        {
            props.cat.map(category => (
                <div className="col cat__item" key={category.id} id={category.id}>
                    <Link to={`/category/${category.name}`}>
                        <img src={category.img} alt={category.name} />
                        <p>
                            {category.name}
                        </p>
                    </Link>

                </div>
            ))}
    </div>)

}