import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionButtonContainer = () => {
    return (
        
        <div className="ActionButtonsContainer">
        <ActionButton buttonStyle={'number'} text={'/'} />
        <ActionButton buttonStyle={'number'} text={'*'} />
        <ActionButton buttonStyle={'number'} text={'-'} />
        <ActionButton buttonStyle={'number'} text={'+'} />
      </div>
        
   )
};
export default ActionButtonContainer;
