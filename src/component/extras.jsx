import React from 'react';
import HeaderNav from './header-nav';
import SearchForm from './header-nav/search-form';
import Logo  from './logo';
import storesLocations from '../data/stores.json';



class Extras extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: { id: '1', name: 'Bondues - Ravennes les Francs', cp: '59800' }
        }
    }
    render() {
        return (
            <div className="extras">
                <div className="container">
                    <div className="row justify-content-between">
                        
                        <div className="geoloc d-flex justify-content-space-evenly">
                            <Collapsible></Collapsible>
        <span>{storesLocations.stores[1].name} picon</span>
                            <a href="#" className="ml-2 mr-2 text-white">Changer de centre</a>
                        </div>
                        <searchForm />
                        <HeaderNav {...this.props}></HeaderNav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Extras