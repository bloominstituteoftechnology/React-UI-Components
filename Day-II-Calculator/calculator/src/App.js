import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <div className ='display'>
        <CalculatorDisplay buttonStyle = {'number'} text ={'0'}/>
      </div>


      <div className ="button-container">
        <ActionButton buttonStyle = {'clear'} text = {'Clear'}/>
      
      
     <OperatorButton buttonStyle ={'operator'} text={'%'}/>  

      
      <NumberButton buttonStyle={'number'} text={'7'} />               
          <NumberButton buttonStyle={'number'} text={'8'} />           
          <NumberButton buttonStyle={'number'} text={'9'} />  



     <OperatorButton buttonStyle ={'operator'} text={'x'}/> 




          <NumberButton buttonStyle={'number'} text={'4'} />               
          <NumberButton buttonStyle={'number'} text={'5'} />               
          <NumberButton buttonStyle={'number'} text={'6'} />

     <OperatorButton buttonStyle ={'operator'} text={'-'}/> 


                    
                    <NumberButton buttonStyle={'number'} text={'1'}/>
          <NumberButton buttonStyle={'number'} text={'2'}/>
          <NumberButton buttonStyle={'number'} text={'3'}/>

     <OperatorButton buttonStyle ={'operator'} text={'+'}/> 
     

        
    
     
        <ActionButton buttonStyle={'clear'} text={'0'}/>
        <OperatorButton buttonStyle ={'operator'} text={'='}/> 
      </div>
    </div>
  );
};

export default App;
