import React from 'react';

import ProductList from '../component/product-listing/product-list';
import ProductListPromo from './../component/product-listing/product-list-promos';

import Banner from '../component/banner';
import FooterCat from './../component/footer-categories/index';

//import data from '../data/products.json';
import bannersData from '../data/banners.json';
import catData from '../data/categories.json';

export default function HomePage(props) {
     return (<>
          <ProductList/>
          <Banner banners={bannersData.banners[0]}></Banner>
          <Banner banners={bannersData.banners[1]}></Banner>

          <div className="row mt-2">
               <Banner banners={bannersData.banners[2]}></Banner>
               <div className="col">
                    <ProductListPromo/>
               </div>
          </div>
          <div className="row mt-2">
               <Banner banners={bannersData.banners[2]}></Banner>
               <div className="col">
               <ProductListPromo/>
               </div>
          </div>
          <div className="row mt-2">
               <Banner banners={bannersData.banners[2]}></Banner>
               <div className="col">
               <ProductListPromo/>
               </div>
          </div>
          <div className="row">
               <Banner banners={bannersData.banners[1]}></Banner>
          </div>
          <FooterCat cat={catData.categories}></FooterCat>
     </>
     )
}