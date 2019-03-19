import React from 'react';
import './Button.css';
import ActionButtons from './ActionButton';
import NumberButtons from './NumberButton';

function ButtonContainer(props) {
    const arrayNum = ['Clear',9,8,7,6,5,4,3,2,1,0];
    const arrayAction = ["÷","x","-","+","="];
    return (
        <div className="ButtonC">
            <div className="KeyL">
                {
                arrayNum.map( x =>  <NumberButtons text={x} />)
                }
            </div>
            <div className="KeyR">
                {
                arrayAction.map( x =>  <ActionButtons text={x} /> )
                }
            </div>
           
          
        </div> 
    )
    
};

export default ButtonContainer;