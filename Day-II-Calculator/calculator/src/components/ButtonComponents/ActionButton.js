import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button  className={`button-styles ${props.customStyleProp}`}>
    {props.text}
    </button>
}

ActionButton.defaultProps = {
    // defaultProps is how we safeguard our components to make them truly reusable
    // if a user doesn't supply the component with the proper attrs, they will default to these props.
    text: 'Default text',
    customStyleProp: 'default-action-button-styles'
  };
export default ActionButton;