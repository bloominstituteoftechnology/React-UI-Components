import React from 'react'
import ActionButton from '../ButtonComponents/ActionButton'
import './ActionsContainer.css'

const ActionsContainer = (props) => {
    return(
        <div className="actions-container">
            <ActionButton buttonStyle="action-button" text="÷" mathSymbol="/" addEvaluate={props.addEvaluate}/>
            <ActionButton buttonStyle="action-button" text="x" mathSymbol="*" addEvaluate={props.addEvaluate}/>
            <ActionButton buttonStyle="action-button" text="-" mathSymbol="-" addEvaluate={props.addEvaluate}/>
            <ActionButton buttonStyle="action-button" text="+" mathSymbol="+" addEvaluate={props.addEvaluate}/>
            <ActionButton buttonStyle="action-button" text="=" addEvaluate={props.evaluate}/>
        </div>
    )
}

export default ActionsContainer;