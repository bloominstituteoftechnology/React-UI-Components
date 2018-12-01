import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import DivideButton from "./components/ButtonComponents/DivideButton";
import MultiplyButton from "./components/ButtonComponents/MultiplyButton";



const App = props => {

    let NumKeys=[];
    for(let i=1;i<10;i++){

        NumKeys.push(<NumberButton  text={i} buttonStyle="white"/>);

    }

    return (

       <div className="container">
           <CalculatorDisplay text="0 "/>
           <div className="both">
             <div className="first">
                <ActionButton  text ="clear"/>
                {NumKeys}
                <ActionButton  text ="0"/>
             </div>
             <div className="second">
                 <DivideButton buttonStyle="red"/>
                 <MultiplyButton buttonStyle="red"/>
                 <NumberButton text="+" buttonStyle="red"/>
                 <NumberButton text="-" buttonStyle="red"/>
                 <NumberButton text="=" buttonStyle="red"/>
             </div>
           </div>
       </div>



    );


}
export default App;
