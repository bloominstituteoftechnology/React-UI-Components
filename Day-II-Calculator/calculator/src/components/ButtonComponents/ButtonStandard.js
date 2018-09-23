import React from 'react';
import './ButtonStandard.css'

const ButtonStandard = (props) => {
    return (<div className="btn-std">
        <p>{props.name}</p>
    </div>
    );
};

export default ButtonStandard;