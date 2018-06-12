import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button  className={`button-styles ${props.customStyleProp}`}>
    {props.text}
    </button>
}

NumberButton.defaultProps = {
    // defaultProps is how we safeguard our components to make them truly reusable
    // if a user doesn't supply the component with the proper attrs, they will default to these props.
    text: 'Default text',
    customStyleProp: 'default-number-button-styles'
  };
export default NumberButton;