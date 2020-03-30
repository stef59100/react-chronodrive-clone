import React from 'react';
import ProductListFilter from '../component/product-listing/product-list-filter';

import { Helmet } from 'react-helmet';


 export default function CategoryPage(props) {     
    
        console.log(props);
       
        return (<div>
            <Helmet>
                <title>{props.catname}</title>
            </Helmet>
            <h1>{props.catname}</h1>
            <ProductListFilter catid={props.catid} />
        </div>
        )
    
}
 
