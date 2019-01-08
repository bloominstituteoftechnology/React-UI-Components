import React from 'react';
import './Button.css';

const NumberButton = () => {
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
    return (
        <div className='numberContainer'> 
            {
                numbers.map(e => {
                    if(e === 0){
                        return (<p className='calculatorBtn calculatorBtn--number calculatorBtn--number-zero'>{e}</p>)
                    } else {
                        return (<p className='calculatorBtn calculatorBtn--number'>{e}</p>)
                    }
                })
            }
        </div>
    )
}

export default NumberButton;