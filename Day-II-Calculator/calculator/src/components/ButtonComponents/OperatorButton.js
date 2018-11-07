import React, {Fragment} from 'react';
import './Button.css';


function OperatorButton (props) {
    return (
        <Fragment>
            <button className="operatorButton">{props.text}</button>
    
        </Fragment>
    )
}


export default OperatorButton;