import React from 'react';
import CategoryListFilter from '../component/category/category-list-filter';

import { Helmet } from 'react-helmet';
import catData from '../data/categories.json';
import FooterCat from './../component/footer-categories/index';


 export default function CategoryPage(props) {     
    
        console.log(props);
       
        return (<div>
            <Helmet>
                <title>{props.catname}</title>
            </Helmet>
            <h1>{props.catname}</h1>
            <CategoryListFilter catid={props.catid} />
            <FooterCat cat={catData.categories}></FooterCat>
        </div>
        )
    
}
 
