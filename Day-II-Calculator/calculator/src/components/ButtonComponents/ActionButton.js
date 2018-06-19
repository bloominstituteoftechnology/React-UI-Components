import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className={props.styles}>{props.name}</div>
  );
};

ActionButton.defaultProps = {
  name: '/',
  styles: 'button'
}

export default ActionButton;
