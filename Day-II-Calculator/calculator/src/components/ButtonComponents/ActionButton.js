import React, {Fragment} from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <Fragment>
            <div className={`${props.buttonColor} ${props.buttonWidth} onClick=${props.whenClicked(props.value)}`}>
                {props.value}
            </div>
        </Fragment>
    );
}

export default ActionButton