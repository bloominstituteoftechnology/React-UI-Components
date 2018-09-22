import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionContainer = (props) => {
    return (
        <div class='action-buttons'>
            <div class='action'>
                <ActionButton class='buttonStyle' text='/' />
            </div>
            <div class='action'>
                <ActionButton class='buttonStyle' text='x' />
            </div>
            <div class='action'>
                <ActionButton class='buttonStyle' text='-' />
            </div>
            <div class='action'>
                <ActionButton class='buttonStyle' text='+' />
            </div>
            <div class='action'>
                <ActionButton class='buttonStyle' text='=' />
            </div>
        </div>
    )
}

export default ActionContainer;