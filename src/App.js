import React from 'react';
import Router from './Router'

import { connect } from 'react-redux';

// import Extras from './component/extras';
import TopArea from './component/top';
import SearchForm from './component/search-form/search-form';
import HeaderNav from './component/header-nav/header-nav';
import Logo from './component/logo';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";

import { ReactComponent as PlaceHolder} from './helpers/placeholder.svg';
import { ReactComponent as Shuffle} from './helpers/random.svg';


import './app.scss';
import './helpers/collapse.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: { id: '1', name: 'Bondues - Ravennes les Francs', cp: '59200' }
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
                <div className="geoloc d-flex justify-content-space-evenly">
                  <CollapsibleComponent name="one">
                    <CollapsibleHead className="d-flex"><PlaceHolder className="col-2"/><div className="col-10">
                      {this.state.city.cp}-{this.state.city.name}
                    </div></CollapsibleHead>
                    <CollapsibleContent>
                    <ul className="">
                      <li>
                        <Shuffle className="col-2"></Shuffle>
                        <a href="#" className="ml-2 mr-2 col-10">Changer de Magasin</a></li>
                    </ul>
                     
                    </CollapsibleContent>                    
                  </CollapsibleComponent>

                </div>
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
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App);
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
