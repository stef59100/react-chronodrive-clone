import React from 'react';
import storesLoc from '../../data/stores.json';

import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
  } from "react-collapsible-component";
import { ReactComponent as Shuffle} from '../../helpers/random.svg';
import { ReactComponent as PlaceHolder} from '../../helpers/placeholder.svg';

const Geoloc = () => {
    return (
        <div className="geoloc-wrapper">
         <div className="geoloc d-flex justify-content-space-evenly">
                  <CollapsibleComponent name="one">
                    <CollapsibleHead className="d-flex"><PlaceHolder className="col-2"/><div className="col-10">
                      {storesLoc.stores[0].cp} -{storesLoc.stores[0].name} -{storesLoc.stores[0].address}
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
    )
}
export default Geoloc;