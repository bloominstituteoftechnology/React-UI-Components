import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberCollection = props => {
return (
<div>
    <NumberButton number="clear"/>
    <NumberButton number="9"/>
    <NumberButton number="8"/>
    <NumberButton number="7"/>
    <NumberButton number="6"/>
    <NumberButton number="5"/>
    <NumberButton number="4"/>
    <NumberButton number="3"/>
    <NumberButton number="2"/>
    <NumberButton number="1"/>
    <NumberButton number="0"/>
</div>
    );
};


export default NumberCollection;