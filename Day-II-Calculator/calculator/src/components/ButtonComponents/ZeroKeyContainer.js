import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
import ZeroKey from './ZeroKey.js';

const ZeroKeyContainer = () => {
    return (
        
        <div className="ZeroKeyContainer">
        <ZeroKey buttonStyle={'action'} text={'0'} />
      
      </div>
        
   )
};
export default ZeroKeyContainer;