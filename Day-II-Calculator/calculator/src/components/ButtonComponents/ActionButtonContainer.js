import React from 'react';
import './Button.css';
import ActionButtons from './ActionButton';
const ActionButtonsContainer= (props) => {
    return (
        <div className="actionContainer">
            <ActionButtons text="÷" displayStyle='action'/>
            <ActionButtons text="×" displayStyle='action' />
            <ActionButtons text="-" displayStyle='action' />
            <ActionButtons text="+" displayStyle='action' />
            <ActionButtons text="=" displayStyle='action' />
        </div>
    )
}
export default ActionButtonsContainer