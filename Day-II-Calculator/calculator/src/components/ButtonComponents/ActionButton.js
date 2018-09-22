import React from 'react';
import './Button.css';

const ActionButton = () => {
    return <div className="action">
        <div className="action-button">&divide;</div>
        <div className="action-button">&times;</div>
        <div className="action-button">&minus;</div>
        <div className="action-button">&#43;</div>
        <div className="action-button">&#61;</div>
      </div>;
}

export default ActionButton;