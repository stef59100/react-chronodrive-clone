import React from 'react';
import storesLoc from '../../data/stores.json';

import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import { ReactComponent as Shuffle } from '../../helpers/random.svg';
import { ReactComponent as PlaceHolder } from '../../helpers/placeholder.svg';




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

  render() {
    return (
      <div className="geoloc-wrapper">
        <div className="geoloc d-flex justify-content-space-evenly">
          <CollapsibleComponent name="one">
            <CollapsibleHead className="row">
              <PlaceHolder width="16" />
              <div className="col-10">
                {this.state.currentStoreName}
              </div>
            </CollapsibleHead>
            <CollapsibleContent>
              <div className="form">
                {this.state.storeList.map((store, i) => (
                  <div key={i}>
                    <div className="form-check">

                      <input type="radio"
                        name="options"
                        id={`option_${store.id}`}
                        className="form-check-input"
                        value={`${store.name} - ${store.address}`}
                        checked={this.state.selectedOption === store.name}
                        onChange={this.handleOptionChange}
                      />
                      <label className="form-check-label" htmlFor={`option_${store.id}`}>
                        <span>{store.cp}</span> - <span>{store.name}</span>
                      </label>
                    </div>
                  </div>
                ))}
                <div>

                </div>
              </div>

            </CollapsibleContent>
          </CollapsibleComponent>

        </div>

      </div>
    )
  }

}
export default Geoloc;