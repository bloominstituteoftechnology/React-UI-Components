import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
import ClearKey from './ClearKey.js';

const ClearKeyContainer = () => {
    return (
        
        <div className="ClearKeyContainer">
        <ClearKey buttonStyle={'action'} text={'CLEAR'} />
      
      </div>
        
   )
};
export default ClearKeyContainer;