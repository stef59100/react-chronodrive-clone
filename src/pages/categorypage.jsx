import React from 'react';
import { Helmet } from 'react-helmet';
import Categories from '../data/categories.json';
import { Link } from 'react-router-dom';


import './categorypage.scss';


const CategoryPage = ({ match }) => {
    const filteredCat = Categories.categories.filter(cat => (
        cat.route=== match.params.handle
    ))
    return (<div>
        <Helmet>
            <title>{match.params.handle}</title>
        </Helmet>        
        {
            filteredCat.map((item, s) => (
                <div key={s}>
                    <h1>{item.name}</h1>
                    <ul className="d-flex flex-row list-unstyled justify-content-start">
                        {item.subcategories.map((subcat, k) =>
                            <li className="d-flex flex-column align-items-center" key={k}>
                                <figure><img src={subcat.img} alt={subcat.subcat_name} /></figure>
                                <h2>{subcat.subcat_name}</h2>
                                <ul className="flex-column list-unstyled pr-4 pl-4 navcatpage">
                                    {subcat.segmentations.map((segmentation, nozo) =>
                                        <li key={nozo} className="navcatpage__item">
                                            <Link
                                                to={segmentation.seg_slug}
                                                className="invert">
                                                {segmentation.seg_name}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )} </ul>
                </div>
            ))



        }

    </div>
    )
}
export default CategoryPage;