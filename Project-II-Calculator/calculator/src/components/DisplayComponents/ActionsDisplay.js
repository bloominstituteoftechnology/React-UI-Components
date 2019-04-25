import React from 'react';
import './Display.scss';
import ActionButton from '../ButtonComponents/ActionButton';

const Actions = ['/','X', '-', '+', '='];

const ActionsDisplay = (props) => {
  return (

    Actions.map(action => {
        return <ActionButton text={action} buttonStyle='actionButton' />;  
    })
    
  );

}

export default ActionsDisplay;

