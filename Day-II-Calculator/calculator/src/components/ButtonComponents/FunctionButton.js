import React from 'react';
import './Button.css';


const FunctionButton = props => {
    return (
        <div class="math-functions">
            <button>{props.function.function}</button>
        </div>
    );
};

export default FunctionButton;