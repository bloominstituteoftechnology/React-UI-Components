import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const actionsArr = [
    <span>&divide;</span>,
    <span>&times;</span>,
    <span>&minus;</span>,
    <span>&#43;</span>,
    <span>&#61;</span>
]

function ActionsContainer(props) {
    return (
        <div className='actions-container'>
        {/* <h1>&divide;</h1> */}
            {actionsArr.map(action => <ActionButton operatorProp={action} />)}
        </div>
    )
}

export default ActionsContainer;
