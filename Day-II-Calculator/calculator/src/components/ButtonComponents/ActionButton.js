import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className = "actionButton">{props.btnContent}</button>;
};

const ActionButtonsContainer = () => {
    return (
      <div className = "actionButtonsContainer">
            <ActionButton btnContent= "÷" className = "actionRow"/>
            <ActionButton btnContent= "x" className = "actionRow"/>
            <ActionButton btnContent= "-" className = "actionRow"/>
            <ActionButton btnContent= "+" className = "actionRow"/>
            <ActionButton btnContent= "=" className = "actionRow"/>
      </div>
    );
  };

export default ActionButtonsContainer;