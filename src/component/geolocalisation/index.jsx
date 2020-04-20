import React from 'react';
import storesLoc from '../../data/stores.json';


import Collapsible from 'react-collapsible';


import { ReactComponent as Shuffle } from '../../helpers/random.svg';
import { ReactComponent as PlaceHolder } from '../../helpers/placeholder.svg';


import './geoloc.scss';
import Trigger from './trigger';

class Geoloc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeList: storesLoc.stores,
      currentStoreName: `${storesLoc.stores[0].name} - ${storesLoc.stores[0].address}`,
      currentStoreCp: storesLoc.stores[0].cp,
      currentStoreAddress: storesLoc.stores[0].address,
      selectedOption: "Bondues - Rond point de ravennes les francs",
    }
  }
 
  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value,
      currentStoreName: e.target.value
    })
  }

  closeOnFocusOut = () => {
    const theTrigger = document.querySelector('.Collapsible__trigger');
    if (theTrigger.classList.contains('is-open')){
      
    }


  }

  render() {
    return (
      <div className="geoloc-wrapper">
        <div className="geoloc d-flex justify-content-space-evenly">
          <Collapsible trigger={<Trigger text={this.state.currentStoreName}/>} transitionCloseTime='500'  triggerTagName='div' bahavior="hover">

          <div className="form">
                {this.state.storeList.map((store, i) => (
                  <div key={i} className="store__list__item">
                    
                    <label className="radio-container d-flex" htmlFor={`option_${store.id}`}>
                        <span>{store.cp} - {store.name}</span>
                      <input type="radio"
                        name="options"
                        id={`option_${store.id}`}
                        className="form-check-input"
                        value={`${store.name} - ${store.address}`}
                        checked={this.state.selectedOption === `${store.name} - ${store.address}`}
                        onChange={this.handleOptionChange}
                      />
                      <span class="checkmark"></span>
                      
                      </label>
                    
                  </div>
                ))}
                <div>

                </div>
              </div>


          </Collapsible>
         
              
            

        </div>

      </div>
    )
  }

}
export default Geoloc;