import React from 'react';
import './Button.css';

const MyButton = props => {
    return (
        // `${console.log('props: ', props)}`
        <button className={`displayFlex ${props.customeStyle}`}>{props.text}</button>
    )
        
    
}

const NumberButton = () => {
    return (
        <div>
            <MyButton customeStyle='whiteBack' text='7' />

        </div>
    )
}
 
export default NumberButton;