import React from 'react';
import ProductListFilter from '../component/product-listing/product-list-filter';

import { Helmet } from 'react-helmet';


 export default class CategoryPage extends React.Component {
    render() {
        console.log(this.props);
        return (<div>
            <Helmet>
                <title>{this.props.catname}</title>
            </Helmet>
            <h1>{this.props.catname}</h1>
            <ProductListFilter catid={this.props.catid} />
        </div>
        )
    }
}
 
