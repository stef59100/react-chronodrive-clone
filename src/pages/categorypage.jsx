import React from 'react';
import { Helmet } from 'react-helmet';
import Categories from '../data/categories.json';
import { Link } from 'react-router-dom';



import './categorypage.scss';


const CategoryPage = () => {

    return (
        <>
        <h1>Rayons</h1>
    <div className="categories row justify-content-between">        
        {
            Categories.categories.map((category, s) => (
                <div className="col col-md-2 categories__item" key={category.id} id={category.id}>
                    <Link to={`/category/${category.id}`}>
                        <img src={`../${category.img}`} alt={category.name} />
                        <p>
                            {category.name}
                        </p>
                    </Link>
                </div>
            ))
        }
    </div>
    </>
    )
}
export default CategoryPage;