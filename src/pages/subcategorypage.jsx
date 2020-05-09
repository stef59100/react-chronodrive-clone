import React from 'react';
import { Helmet } from 'react-helmet';
import Categories from '../data/categories.json';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import './subcategorypage.scss';


const SubcategoryPage = () => {
    const { handle } = useParams();
    const filteredCat = Categories.categories.filter(cat => (
        cat.id === parseInt(handle)
    ))
    return (<div>
        {
            filteredCat.map((item, s) => (
                <div key={s}>
                    <Helmet>
                        <title>{item.name}</title>
                    </Helmet>
                    <h1>{item.name}</h1>
                    <ul className="d-flex flex-column flex-md-row list-unstyled justify-content-start">
                        {item.subcategories.map((subcat, k) =>
                            <li className={`col-12 col-special-5 d-flex flex-column align-items-center`} key={k}>
                                <figure><img src={subcat.img} alt={subcat.subcat_name} /></figure>
                                <h2>{subcat.subcat_name}</h2>
                                <ul className="flex-column list-unstyled pr-4 pl-4 navcatpage">
                                    {subcat.segmentations.map((segmentation, nozo) =>
                                        <li key={nozo} className="navcatpage__item">
                                            <Link
                                                to={`/category/subcategory/${segmentation.seg_id}`}
                                                className="invert">
                                                {segmentation.seg_name}
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link to='/testsub/transmitted-param' >Link test</Link>
                                    </li>
                                </ul>
                            </li>
                        )} </ul>
                </div>
            ))
        }
    </div>
    )
}
export default SubcategoryPage;