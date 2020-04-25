import React from 'react';
import Router from './Router'

import { connect } from 'react-redux';

// import Extras from './component/extras';
import TopArea from './component/top';
import CartHeader from './component/cart-header';
import SearchForm from './component/search-form/search-form';
import HeaderNav from './component/header-nav/header-nav';
import Logo from './component/logo';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";




import './app.scss';
import './helpers/collapse.scss';
import Geoloc from './component/geolocalisation/index';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: { id: '1', name: 'Bondues - Ravennes les Francs', cp: '59300' }
    }
  }
  render() {
    return (
      <>
        <TopArea></TopArea>
        <div className="extras">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <Logo className="h logo" />
                <Geoloc />
               
              </div>

              <SearchForm />
              <HeaderNav ></HeaderNav>
              <CartHeader {...this.props}></CartHeader>
            </div>
          </div>
        </div>
        <div className="app container">
          <header className="app-header row">
            <h1 className="col">ProductDrive - Look like chronodrive</h1>
          </header>
          <Router />
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
