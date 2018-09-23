import React from 'react';
import './ButtonLarge.css'

const ButtonLarge = (props) => {
    const class2 = props.extra
    return (<div className={`btn-large ${class2}`}>
        <p>{props.name}</p>
    </div>
    );
};

export default ButtonLarge;