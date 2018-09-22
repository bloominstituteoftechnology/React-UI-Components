import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';


const NumbersContainer = () => {
    return (
       <div className="NumbersContainer">
       <NumberButton buttonStyle={'number'} text={'7'} />
       <NumberButton buttonStyle={'number'} text={'8'} />
       <NumberButton buttonStyle={'number'} text={'9'} />
       <NumberButton buttonStyle={'number'} text={'4'} />
       <NumberButton buttonStyle={'number'} text={'5'} />
       <NumberButton buttonStyle={'number'} text={'6'} />
       <NumberButton buttonStyle={'number'} text={'1'} />
       <NumberButton buttonStyle={'number'} text={'2'} />
       <NumberButton buttonStyle={'number'} text={'3'} />
     </div>
    
    )


}






export default NumbersContainer;