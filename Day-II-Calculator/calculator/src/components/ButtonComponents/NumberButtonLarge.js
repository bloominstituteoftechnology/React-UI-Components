import React from 'react';
import './Button.css';

const NumberButtonLarge = props => {
    return (<div className="large-number">
    {props.text}
</div>)
}

export default NumberButtonLarge;