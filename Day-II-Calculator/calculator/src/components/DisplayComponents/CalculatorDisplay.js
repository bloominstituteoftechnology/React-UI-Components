import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
       return (
             <div className="display">
                 <div className="output">0</div>
             </div>
        ); 
    }
}


export default CalculatorDisplay; 
