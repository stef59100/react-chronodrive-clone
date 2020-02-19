import React from 'react';
import {Field, reduxForm } from 'redux-form';

let CheckoutForm= (props) => {
    const {handleSubmit} = props
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="order[name]">Your name</label>
                <Field name= "order[name]" component="input" type="text"/>
            </div>
            <div className="form-control">
                <label htmlFor="order[email]">Your email</label>
                <Field name= "order[email]" component="input" type="email"/>
            </div>
            <button type="submit">Submit order</button>        </form>
    </div>
}


CheckoutForm=reduxForm(
    {
        form:'checkout'
    }
)(CheckoutForm)


export default CheckoutForm
