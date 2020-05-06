import React from 'react';
import { connect } from 'react-redux';
import { useFetch } from '../../hooks';
import ProductListItem from './product-list-item';
import { useParams, useLocation, useHistory } from 'react-router';
import { credential } from './../../credentials/index';
import { noProducts } from './../../environment/messages';


// import { cartItemsWithQuantities } from './../cart/index';

import './product-list.scss';

const ProductListSub = (props) => {
    const { handle } = useParams();
    let { addToCart, removeFromCart, cartItem } = useLocation();
    const history = useHistory();
    const [data, loading] = useFetch(
        credential
    );

    let findProducts = data.filter(item => item.subcat_id === parseInt(handle));
    console.log(data, findProducts, handle);
    console.log(findProducts.length);

    if (findProducts.length > 0) {
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
    } else {
        return <div className="empty__cat text-center">
            <p>{noProducts}</p>
            <button className='btn btn-primary' onClick={() => history.push('/categories')}>Retourner aux catégoeies</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductListSub) 