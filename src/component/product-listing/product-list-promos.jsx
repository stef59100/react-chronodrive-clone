import React from 'react';
import { connect } from 'react-redux';
import fetchApi from '../../data/fetch-api'
import ProductListItemPromo from './product-list-item-promo';
import { credential } from './../../credentials/index';
// import { cartItemsWithQuantities } from './../cart/index';

import './product-list.scss';

class ProductList extends React.Component {

    componentDidMount() {
        const { loadProducts } = this.props
        fetchApi('get', credential)
            .then((json => {
                loadProducts(json)
            }))
    }

    render() {
        const { addToCart, removeFromCart, products, cart } = this.props;
        let count = 0;
        let promoProducts=products.filter(product=>product.promo===true);
        let  getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
          }

        return <div className="products-list row mb-3">
            {
               promoProducts.slice(7,11).map((product, i) => (

                    <ProductListItemPromo
                        key={i}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList) 