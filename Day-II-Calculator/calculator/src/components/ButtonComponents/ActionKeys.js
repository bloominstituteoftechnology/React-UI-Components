import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionKeys = () => {
    return (
        <div className='action-keypad'>
            <ActionButton buttonStyle={'action'} text={'/'}/>
            <ActionButton buttonStyle={'action'} text={'x'}/>
            <ActionButton buttonStyle={'action'} text={'-'}/>
            <ActionButton buttonStyle={'action'} text={'+'}/>               
            <ActionButton buttonStyle={'action'} text={'='}/>
        </div>
    )
}

export default ActionKeys;