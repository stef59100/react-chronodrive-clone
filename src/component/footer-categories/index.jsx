import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer-cat.scss';

export default function FooterCat(props) {
    return (<div className="cat row justify-content-start">
        {
            props.cat.map(category => (
                <div className="col cat__item" key={category.id} id={category.id}>
                   
                    <NavLink
                        to={{
                            pathname: category.route,
                            state: {
                                catid:  category.id ,
                                catname:  category.name ,
                                subcategories:  category.subcategories ,
                            }
                        }}
                    >
                        <img src={category.img} alt={category.name} />
                        <p>
                            {category.name}
                        </p>
                    </NavLink>

                </div>
            ))}
    </div>)

}