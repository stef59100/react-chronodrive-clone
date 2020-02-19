import React from 'react';
import Router from './Router'

import { connect } from 'react-redux';

// import Extras from './component/extras';
import TopArea from './component/top';
import SearchForm from './component/search-form/search-form';
import HeaderNav from './component/header-nav/header-nav';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: { id: '1', name: 'Tourcoing -Les Francs', cp: '59200' }
    }
  }
  render() {
    return (
      <>
        <TopArea></TopArea>
        <div className="extras">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="geoloc d-flex justify-content-space-evenly col-2">
                <span>{this.state.city.cp}-{this.state.city.name}</span>
                <a href="#" className="ml-2 mr-2 text-white">Changer de centre</a>
              </div>
              <SearchForm />
              <HeaderNav {...this.props}></HeaderNav>
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
function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
