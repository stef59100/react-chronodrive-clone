import React from 'react';
import { connect } from 'react-redux';
import fetchApi from '../../data/fetch-api'
import ProductListItem from './product-list-item';
// import { cartItemsWithQuantities } from './../cart/index';

import './product-list.scss';

class ProductList extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', 'https://api.jsonbin.io/b/5e42be7b817c5f163f9a9ff4')
        .then((json => {
            loadProducts(json)
        }))
    }

    render() {
        const { addToCart, removeFromCart, products, cart } = this.props;
        let count = 0; 
        console.log(typeof(products));
        return <div className="products-list row mb-3">
            {
            products.slice(5,9).map(product => (

                <ProductListItem 
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

function mapStateToProps(state){
    return {
        cart: state.cart,
        products: state.products
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: (products) => {
            dispatch({ type: 'LOAD', payload: products})
        },
        addToCart : (item) => {
            dispatch({ type:'ADD', payload: item})            
        },
        removeFromCart : (item) => {
            dispatch({ type:'REMOVE', payload: item})            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList) 