import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
/* import ZeroKey from './ZeroKey.js'; */
import Button from './Button';

const ZeroKeyContainer = () => {
    return (
        
        <div className="ZeroKeyContainer">
       {/*  <ZeroKey buttonStyle={'action'} text={'0'} /> */}
        <Button label={'0'} handleClick={this.handleClick} type='input' />
      </div>
        
   )
};
export default ZeroKeyContainer;