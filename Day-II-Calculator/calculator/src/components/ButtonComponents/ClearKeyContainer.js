import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
/* import ClearKey from './ClearKey.js'; */
import Button from './Button';

const ClearKeyContainer = () => {
    return (
        
        <div className="ClearKeyContainer">
       {/*  <ClearKey buttonStyle={'action'} text={'CLEAR'} /> */}
        <Button label={'C'} handleClick={this.handleClick} type='action' />
      </div>
        
   )
};
export default ClearKeyContainer;