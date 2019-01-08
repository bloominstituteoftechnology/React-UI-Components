import React from 'react';
import './Button.css';

export const NumberButton = props => {
    return (<div class="numbutton nb{props.numvalue}">
        {props.numvalue}
    </div>
    );
};
