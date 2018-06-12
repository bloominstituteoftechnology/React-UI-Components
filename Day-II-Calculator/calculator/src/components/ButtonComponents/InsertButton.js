import React from 'react';
import './Button.css';

const InsertButton = (props) => {
    return <button className = {props.class}>{props.symbol}</button>
}
InsertButton.defaultProps = {
    class: 'btn--white',
    symbol: '0'
};

export default InsertButton;