import React from 'react';
import './Button.css';


const ActionButton = () => {
    return (
        <div className="action-buttons center">
          <div className="button-border">&divide;</div>
          <div className="button-border multiplication-resize">&#x2715;</div>
          <div className="button-border">&#x2212;</div>
          <div className="button-border">&#x2b;</div>
          <div className="button-border">&#x3d;</div>
        </div>
    );
};

export default ActionButton;