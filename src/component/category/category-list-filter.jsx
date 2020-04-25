import React from 'react';


import CategoryListItem from './category-list-item';



import './product-list.scss';

const CategoryListFilter = (props) => {

    return (<div className="category-list row mb-3">
        {
            props.subcategories.map((subcategory, pollux) => (
                <CategoryListItem
                    key={pollux}
                    name={subcategory.subcat_name}
                />)
            )}
    </div>)

}


export default CategoryListFilter