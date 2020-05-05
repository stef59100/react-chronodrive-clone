import React from 'react';
import { useParams, useLocation } from 'react-router';
import { credential } from './../credentials/index';



import { Helmet } from 'react-helmet';
import { useFetch } from '../hooks';
import AddRmvBttn from './../component/buttons/add-button';

const ProductPage = (props) => {

    let { addToCart, removeFromCart, cartItem } = useLocation();
    const { productId } = useParams();
    const [data, loading] = useFetch(
        credential
    );

    let findProduct = data.filter(item => item.id === parseInt(productId));

    return (<div>
        <Helmet>
            <title>produit:{productId}</title>
        </Helmet>

        {findProduct.map(prod => (
            <div className="row prod" key={prod.id}>
                <div className="left col-6">
                    <figure>
                        <img src={`../.${prod.img}`} alt={prod.title} className="img-fluid" />
                    </figure>
                </div>
                <div className="right col-6"> <h1>{prod.title}</h1>
                    <p>{prod.description}</p>
                    <span className="prod__price">{prod.price} €</span>
                    <AddRmvBttn product={prod}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cartItem={cartItem}
                    />
                </div>
            </div>
        ))}
    </div>
    )
}
export default ProductPage

