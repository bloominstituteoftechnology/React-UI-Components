import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
import ActionButton from './ActionButton.js';

const ActionButtonContainer = () => {
    return (
        
        <div className="ActionButtonContainer">
        <ActionButton buttonStyle={'action'} text={'/'} />
        <ActionButton buttonStyle={'action'} text={'*'} />
        <ActionButton buttonStyle={'action'} text={'-'} />
        <ActionButton buttonStyle={'action'} text={'+'} />
        <ActionButton buttonStyle={'action'} text={'='} />
      </div>
        
   )
};
export default ActionButtonContainer;
