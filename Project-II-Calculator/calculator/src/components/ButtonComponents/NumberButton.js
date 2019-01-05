import React from 'react';
import Button from './Button'
import './Button.css';

const numbers = [1,2,3,4,5,6,7,8,9,0]
const numberArr = numbers.map(x => <Button item = {x}/>)

function NumberButton(){
    return(
        <div className="numbers">
            {numberArr}
        </div>
       
    );
}


export default NumberButton;