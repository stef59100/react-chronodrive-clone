import React  from 'react';
import {Field, reduxForm } from 'redux-form';
import './search-form.scss'

let SearchForm = (props) => {
    const {handleSubmit} = props
    return (
        <div className="search col">
            <form onSubmit={handleSubmit}>
        <div className="form-control d-flex align-items-center">            
            <Field name= "search[searchquery]" placeholder="Rechercher(ex.: pommes...)" component="input" type="text"/>
        </div></form>
        </div>
    )
}
SearchForm=reduxForm(
    {
        form:'search'
    }
)(SearchForm)
export default SearchForm