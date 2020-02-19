import React from 'react';
import { ReactComponent as Basket } from './basket.svg';
import { ReactComponent as Minus} from './iconmonstr-minus-5.svg';
import { ReactComponent as More} from './iconmonstr-plus-5.svg';
import './buttons.scss';

export default function AddRmvBttn(props) {
    return (
        <div className={`prod__cart__actions ${props.cartItem? 'opened':null }`}>
            {props.cartItem?
                <button className="btn cart-action rounded-circle rmv-bttn" 
                onClick={() => props.removeFromCart(props.cartItem)} >
                    <Minus className="actions_bttn less"/>
                </button> : null} 

            <div className="qtydisplay">
                {(props.cartItem && props.cartItem.quantity) || ''}
            </div>
            <button className="btn cart-action rounded-circle add-bttn" 
            onClick={() => props.addToCart(props.product)} >
                 {props.cartItem?
                 <More className="actions_bttn more"/>
                :<Basket />}
            </button>
        </div>
    )
}