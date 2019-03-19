import React from 'react';
import './Button.css';
import ActionButtons from './ActionButton';
import NumberButtons from './NumberButton';

function ButtonContainer(props) {
    const arrayNum = ['Clear',9,8,7,6,5,4,3,2,1,  0  ];
    return (
        <div>
            <ActionButtons />
            {
                arrayNum.map( x =>  <NumberButtons text={x} />)
            }
          
        </div> 
    )
    
};

export default ButtonContainer;