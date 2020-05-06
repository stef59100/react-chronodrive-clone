import React from 'react';
import { connect } from 'react-redux';
import AddRmvBttn from './../buttons/add-button';
import { NavLink } from 'react-router-dom';
import '../buttons/buttons.scss'
import './cart.scss'
import { ReactComponent as Minus } from './../buttons/iconmonstr-minus-5.svg';
import { ReactComponent as More } from './../buttons/iconmonstr-plus-5.svg';
import { ReactComponent as Delete } from './../buttons/icons8-delete.svg';

function sort(items) {
    return items.sort((a, b) => {
        if (a.id !== b.id) {
            return a.id - b.id
        }
    })
}

const Cart = (props) => {
    return <div className="cart">

        {sort(props.cart).map(item => <div className="cart__item d-flex row p-2 mb-2 align-items-center justify-content-between" key={item.id}>
            <figure className='col-12 col-md-2'><img src={item.img} alt={`${item.title} - ${item.description}`} className="img-fluid" /></figure>
            <div className="col-12 col-md-2">
                <p className="cart__item__title">{item.title}</p>
                <p className="cart__item__desc">{item.description}</p>
                <p>{item.conditioning}</p>
            </div>
            <div className="col-12 col-md-2 h5 text-primary">
               <p> {item.price} €</p>
                <p>{(item.price * item.quantity).toFixed(2)} €</p>
            </div>
           
            <div className="actions  col-2 d-flex justify-content-between align-items-center">
                <div className="prod__cart__actions d-flex justify-content-end align-items-center">
                    <button className="btn cart-action rounded-circle rmv-bttn" onClick={() => props.removeFromCart(item)}><Minus className="actions_bttn less" /></button>
                    <div>{item.quantity}</div>
                    <button className="btn cart-action rounded-circle add-bttn" onClick={() => props.addToCart(item)}> <More className="actions_bttn more" /></button>
                </div>
                <button className="btn cart-action rmvall-bttn" onClick={() => props.removeAllFromCart(item)}><Delete/></button>

            </div>
        </div>)
        }

        <div className="cartFooter d-flex">
            <div>{props.cart.reduce((acc, item) => {
                let prix= (item.specialprice!== "")?item.specialprice:item.price;
                let total = parseFloat(acc) + parseFloat(item.quantity) * parseFloat(prix)
                return total.toFixed(2);
    }, 0)} €</div>
            <NavLink className="btn-primary bg-red" to="/checkout">Passer commande</NavLink>           
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