import React from 'react';
import './Button.css';


const ActionMaker = props => {
  return (
      <div className={`button-style action-style ${props.buttonStyle}`} text="props.text" onClick={ () => console.log(`${props.text}`)} >{props.text}</div>
  );
};

const ActionContainer = props => {
  return (
      <div className="action-container-style" text="props.text">
          <ActionMaker text="/" />
          <ActionMaker text="X" />
          <ActionMaker text="-" />
          <ActionMaker text="+" />
          <ActionMaker text="=" />
      </div>
  );
};

/*creating a action button template*/

export default ActionContainer;
