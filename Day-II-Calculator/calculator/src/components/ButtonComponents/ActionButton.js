import React from 'react';
import './Button.css';

const ActionButtonCreator = (props)=> {
    return (
        <div class="button opr-btn">{props.operator}</div>
    );
};

ActionButtonCreator.defaultProps = {
    operator: 'X'
};

const ActionButton = ()=> {
    return (
        <div> 
            <ActionButtonCreator operator= {<i class="fas fa-divide"></i>} />
            <ActionButtonCreator operator= {<i class="fas fa-times"></i>} />
            <ActionButtonCreator operator= {<i class="fas fa-minus"></i>} />
            <ActionButtonCreator operator= {<i class="fas fa-plus"></i>} />
            <ActionButtonCreator operator= {<i class="fas fa-equals"></i>} />
        </div>
    );
};


export default ActionButton;