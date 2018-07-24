import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    // constructor(props){
    //     super(props)
    // }


    render() {
       return (
             <div className="display">
                 <div id = "onScreen"className="output">0</div>
             </div>
        ); 
    }
}


export default CalculatorDisplay; 
