import React from 'react'
import ActionButton from '../ButtonComponents/ActionButton'
import './ActionsContainer.css'

const ActionsContainer = () => {
    return(
        <div className="actions-container">
            <ActionButton buttonStyle="action-button" text="÷"/>
            <ActionButton buttonStyle="action-button" text="x"/>
            <ActionButton buttonStyle="action-button" text="-"/>
            <ActionButton buttonStyle="action-button" text="+"/>
            <ActionButton buttonStyle="action-button" text="="/>
        </div>
    )
}

export default ActionsContainer;