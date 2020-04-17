import React from 'react';
import { ReactComponent as PlaceHolder } from '../../helpers/placeholder.svg';

const Trigger = (props) => {

    return (
        <div className="d-flex align-items-start is__pointer">
            <PlaceHolder width="16" className="mr-2" />
            <div>{props.text}</div>
        </div>
    )
}

export default Trigger;