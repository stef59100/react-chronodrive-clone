import React from 'react';
import { connect } from 'react-redux';
import fetchApi from '../../data/fetch-api'
import ProductListItem from './product-list-item';
// import { cartItemsWithQuantities } from './../cart/index';

import './product-list.scss';

class ProductListFilter extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', 'https://api.jsonbin.io/b/5e4d0e7cf3a83555904f73ca/2')
            .then((json => {
                loadProducts(json)
            }))
    }

    render() {
        const { addToCart, removeFromCart, products, cart} = this.props;
        const id_cat = this.props.catid;     
              
        let filteredProds =  products.filter((item) => (
           item.cat_id ===  11
        ))
        console.log(filteredProds);
        return <div className="products-list row mb-3">
            {
               filteredProds.map((product, index) => (
                    <ProductListItem
                    key={index}
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        //cart={props.cart}
                        cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                    />

                )
                )}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (products) => {
            dispatch({ type: 'LOAD', payload: products })
        },
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListFilter) 