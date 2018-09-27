import React from 'react';
import './Button.css';
/* import ActionButton from './ActionButton'; */
/* import ActionButton from './ActionButton.js'; */
import Button from './Button';

const ActionButtonContainer = () => {
    return (
        
        <div className="ActionButtonContainer">
       {/*  <ActionButton buttonStyle={'action'} text={'/'} />
        <ActionButton buttonStyle={'action'} text={'*'} />
        <ActionButton buttonStyle={'action'} text={'-'} />
        <ActionButton buttonStyle={'action'} text={'+'} />
        <ActionButton buttonStyle={'action'} text={'='} /> */}
        <Button label={'-'} handleClick={this.handleClick} type='action' />
        <Button label={'+'} handleClick={this.handleClick} type='action' />
        <Button label={'*'} handleClick={this.handleClick} type='action' />
        <Button label={'/'} handleClick={this.handleClick} type='action' />
        <Button label={'='} handleClick={this.handleClick} type='action' />



      </div>
        
   )
};
export default ActionButtonContainer;
