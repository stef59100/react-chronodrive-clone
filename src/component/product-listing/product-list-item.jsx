import React from 'react';

import './productItem.scss';
import AddRmvBttn from '../buttons/add-button';
import { ReactComponent as Basket } from '../buttons/basket.svg';

import { Link } from 'react-router-dom';

export default function ProductListtem(props) {

    const cagnoo = (props.product.cagnottage) ? 'cagnottage' : null;
    //    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0];
    return (
        <div className="col-12 col-special-5 d-flex justify-content-between align-items-baseline flex-column mb-3" key={props.product.id}>
            <div className="prod p-2">
                <Link to=
                {{
                    pathname:`/product/${props.product.id}`,
                    state: {
                        cacahuetes:true
                    },
                    addToCart: props.addToCart,
                    removeFromCart : props.removeFromCart,
                    cartItem:props.cartItem
                 }}
                className='prod__link'>
                <img src={`../.${props.product.img}`} alt={props.product.title} className="img-fluid" /></Link>
                <div className="prod__desc d-flex flex-column  justify-content-between ">
                    <div className="text_wrap">
                        <h2 className="h5">{props.product.title}</h2>
                        <p className="prod__desc__text">{props.product.description}</p>
                    </div>
                    <div className="prod__extras">
                        <ProductConditioning badge={props.product.conditioning} ></ProductConditioning>
                    </div>
                   
                    <AddRmvBttn product={props.product}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        cartItem={props.cartItem} />

                    <div className={`prod__price__container d-flex ${cagnoo}`}>
                        <div className="prod__price__container__price col-5">
                            <ShowPromo promo={props.product.promo} price={props.product.price} cagnottage={props.product.cagnottage} rebate={(props.product.price-props.product.specialprice)/props.product.price*100 } specialprice={props.product.specialprice}></ShowPromo>
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
        <p>- {props.rebate.toFixed(2)} %</p>
            </>
        )
    }
}

function ProductConditioning(props) {

    if (props.badge !== "") {
        return (
            <div className="prod__extras__flag">
                <div className="prod__extras__flag__inner"> {props.badge}</div>
            </div>
        )
    } else {
        return null;
    }
}
