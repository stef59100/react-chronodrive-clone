import React from 'react';

import './productItem.scss';
import AddRmvBttn from '../buttons/add-button';
import { ReactComponent as Basket } from '../buttons/basket.svg';

export default function ProductListtem(props) {

    const cagnoo = (props.product.cagnottage) ? 'cagnottage' : null;
    //    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];
    return (<div className="prod col d-flex justify-content-between align-items-baseline flex-column">
        <img src={props.product.img} alt={props.product.title} className="img-fluid" />
        <div className="prod__desc d-flex flex-column  justify-content-between ">
            <div className="text_wrap">
                <h2 className="h5">{props.product.title}</h2>
                <p className="prod__desc__text">{props.product.description}</p>
            </div>
            <ProductConditioning badge={props.product.conditioning} ></ProductConditioning>
            {/* <div className="qtydisplay">
                {
                (props.cartItem && props.cartItem.quantity) || 0
                }
            </div>
            <button className="btn cart-action rounded-circle add-bttn" 
            onClick={() => props.addToCart(props.product)} >
                <Basket />
            </button> */}
            <AddRmvBttn product={props.product}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cartItem={props.cartItem} />

            <div className={`prod__price__container d-flex ${cagnoo}`}>
                <div className="prod__price__container__price col-5">
                    <ShowPromo promo={props.product.promo} price={props.product.price} cagnottage={props.product.cagnottage} specialprice={props.product.specialprice}></ShowPromo>
                </div>
                <div className="prod__price__container__extras col-7">
                    <p className="message text-center">
                        <span >{props.product.specialmessage}</span>
                    </p>
                    <p className="mention text-center" >
                        <span>{props.product.specialmention}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
function ShowPromo(props) {
    if (!props.promo) {
        return (
            <p className="price">
                {props.price} €
            </p>
        );
    } else {
        return (
            <>
                <p className="strikethrough">
                    <del>{props.price} €</del>
                </p>
                <p className="price">
                    {props.specialprice} €
            </p>
            </>
        )
    }
}

function ProductConditioning(props) {

    if (props.badge !== "") {
        return (
            <span className="prod__badge">
                {props.badge}
            </span>
        )
    } else {
        return null;
    }
}