import React from 'react';
import { connect } from 'react-redux';
import AddRmvBttn from './../buttons/add-button';
import { NavLink } from 'react-router-dom';
import '../buttons/buttons.scss'
import './cart.scss'
import { ReactComponent as Minus } from './../buttons/iconmonstr-minus-5.svg';
import { ReactComponent as More } from './../buttons/iconmonstr-plus-5.svg';

function sort(items) {
    return items.sort((a, b) => {
        if (a.id !== b.id) {
            return a.id - b.id
        }
    })
}

const Cart = (props) => {
    return <div className="cart">

        {sort(props.cart).map(item => <div className="cart__item d-flex row" key={item.id}>
            <img src={item.img} alt={item.title} className="img-fluid col-2" />
            <div className="col-2">
                <p >{item.title}</p>
                <p >{item.description}</p>
            </div>
            <p className="col-2">{item.price} €</p>
            <p className="col-2">{(item.price * item.quantity).toFixed(2)} €</p>
            <div className="actions  col d-flex justify-content-between align-items-center">
                <div className="prod__cart__actions d-flex justify-content-end align-items-center">
                    <button className="btn cart-action rounded-circle rmv-bttn" onClick={() => props.removeFromCart(item)}><Minus className="actions_bttn less" /></button>
                    <div>{item.quantity}</div>
                    <button className="btn cart-action rounded-circle add-bttn" onClick={() => props.addToCart(item)}> <More className="actions_bttn more" /></button>
                </div>
                <button className="btn cart-action" onClick={() => props.removeAllFromCart(item)}>Remove All</button>

            </div>
        </div>)
        }

        <div className="cartFooter d-flex">
            <div>{props.cart.reduce((acc, item) => {
                let total = parseFloat(acc) + parseFloat(item.quantity) * parseFloat((item.specialprice:item.price))
                return total.toFixed(2);
    }, 0)} €</div>
            <NavLink className="btn-primary" to="/checkout">checkout</NavLink>
        </div>
    </div>

}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }

    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)