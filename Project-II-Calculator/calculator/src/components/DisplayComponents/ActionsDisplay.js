import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';

const Actions = ['-', '+', '=', 'X', 'clear'];

const ActionsDisplay = (props) => {
  return (
    Actions.map(action => {
        return <ActionButton text={action}/>;
       
    })
  );}

export default ActionsDisplay;

