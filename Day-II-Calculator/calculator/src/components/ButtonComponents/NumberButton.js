import React from 'react';
import './Button.css';

// class NumberButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {text: props.text};
//     }
// }

const NumberButton = (props) => {
    const clickHandler = () => {
        return props.text;
    };
    
    return (<button
    onClick={() => clickHandler()}
    className={`number-button ${props.customStyle}`}>
    {props.text}
    </button>)
};

NumberButton.defaultProps = {
    text: '0',
};

export default NumberButton;