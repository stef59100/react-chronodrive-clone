import React from 'react';
import { connect } from 'react-redux';


import Cart from './../cart/index';
import CheckoutForm from './checkout-form';
import fetchApi from '../../data/fetch-api';

function Checkout(props) {
    const { cart } = props
    return <div>
        <Cart />
        <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />

    </div>
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {

}
function submitOrder(values, cart) {
    const { email, name } = values.order

    fetchApi('post', 'http://test.json', {
        order: {
            name,
            email,
            order_items_attributes: cart.map(item => ({
                product_id: item.id,
                qty: item.quantity
            }))
        }

    }).then(json => {
        if (json.errors) {
            alert('Not OK')
            return

        } else {
            document.location.href = `/orders/${json.id}`
        }
    })

}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)