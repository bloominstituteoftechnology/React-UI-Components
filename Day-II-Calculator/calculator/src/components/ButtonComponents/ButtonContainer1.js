import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';



const ButtonContainer1 = () => {
   return(<div>
   <div>
       <NumberButton text="7"/>
       <NumberButton text="8"/>
       <NumberButton text="9"/>
       <NumberButton text="X"/>
   </div>
   <div>
       <NumberButton text="4"/>
       <NumberButton text="5"/>
       <NumberButton text="6"/>
       <NumberButton text="-"/>
    </div>
    <div>
       <NumberButton text="1"/>
       <NumberButton text="2"/>
       <NumberButton text="3"/>
       <NumberButton text="+"/>
   </div>
   </div>)
}


export default ButtonContainer1;