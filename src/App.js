import React from 'react';
import Router from './Router'

import { connect } from 'react-redux';

// import Extras from './component/extras';
import TopArea from './component/top/top';
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
      phone: '',
      info: '',
      user:''
    }
    this.getItFromChild= this.getItFromChild.bind(this);
    this.getStorePhone= this.getStorePhone.bind(this);
    this.getStoreInfo= this.getStoreInfo.bind(this);
  }

  getItFromChild(arg){
    this.setState({user: arg})
    console.log(arg);
  }

  getStorePhone(arg){
    this.setState({phone: arg})
  }
  getStoreInfo(arg){
    this.setState({info: arg})
    console.log(arg);
  }


  render() {
    return (
      <>
        <TopArea callb={this.getItFromChild} storephone={this.state.phone} storeinfo={this.state.info}></TopArea>
        <div className="extras">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <Logo className="h logo" />
                <Geoloc getphoneNumber={this.getStorePhone} getstoreOpening={this.getStoreInfo} />
              </div>
              <SearchForm />
              <HeaderNav user={this.state.user} ></HeaderNav>
              <CartHeader {...this.props}></CartHeader>
            </div>
          </div>
        </div>
        <div className="app container">
          <header className="app-header alert alert-primary">
            <h1>ProductDrive - Look like chronodrive</h1>
            <p>Dans le cadre de mon apprentissage du framework ReactJs, je me suis fixé pour objectif de créer un clone du site chronodrive, wip disponible ici : <a href="https://github.com/stef59100/react-chronodrive-clone">Lien github</a></p>
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
