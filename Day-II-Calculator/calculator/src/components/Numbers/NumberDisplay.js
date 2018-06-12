import React from 'react';
import './Number.css';

const MyNumber = props => {
    return <p className={props.number}>{props.name}</p>
}

const NumberDisplay = () => {
    return <div className='row number'>
    <MyNumber number='number' name='0' />
    </div>
}

export default NumberDisplay;