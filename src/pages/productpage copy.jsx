import React from 'react';
import ProductListFilter from '../component/product-listing/product-list-filter';

import { Helmet } from 'react-helmet';


 export default function ProductPage({match, location}) { 
    const {
        params: { productId }
      } = match;      
       
        return (<div>
            <Helmet>
                <title>produit: {productId}</title>
            </Helmet>
            <h1>produit: {productId}</h1>
            
        </div>
        )
    
}
 
