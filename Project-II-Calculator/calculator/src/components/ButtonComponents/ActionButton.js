import React from 'react';
import './Button.css';

// ActionButton.defaultProps = {
//     buttonStyles: 'orange',
// };


const ActionButton = props => {
    return (
        <div>
            <div className="action-button-position">
                <div className="border">&divide;</div>
                <div className="border">x</div>
                <div className="border">&#x2212;</div>
                <div className="border">&#x2b;</div>
                <div className="border">&#x3d;</div>
            </div>
            <div className={props.buttonStyles}></div>
        </div>
    );
};

ActionButton.defaultProps = {
    buttonStyles: 'orange',
}

export default ActionButton;