import React from 'react';
import './ButtonLarge.css'

const ButtonLarge = (props) => {
    return (<div className="btn-large">
        <p>{props.name}</p>
    </div>
    );
};

export default ButtonLarge;