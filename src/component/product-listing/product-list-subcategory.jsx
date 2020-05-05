import React from 'react';
import { connect } from 'react-redux';
import { useFetch } from '../../hooks';
import ProductListItem from './product-list-item';
import { useParams, useLocation } from 'react-router';
import { credential } from './../../credentials/index';

// import { cartItemsWithQuantities } from './../cart/index';

import './product-list.scss';

const ProductListSub= (props) => {
    const {handle} = useParams();
    let { addToCart, removeFromCart, cartItem } = useLocation();
    const [data, loading] = useFetch(
        credential
    );

    let findProducts = data.filter(item => item.subcat_id === parseInt(handle));
    console.log(data,findProducts, handle);

    return <div className="products-list row mb-3">
        {
            findProducts.map((product, pollux) => (
                <ProductListItem
                    key={pollux}
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    //cart={props.cart}
                    cartItem={cartItem}
                />

            )
            )}
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductListSub) 