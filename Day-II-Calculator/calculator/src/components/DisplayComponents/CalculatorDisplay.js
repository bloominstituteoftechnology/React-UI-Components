import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {total: 0}
    }


    render() {
       return (
             <div className="display">
                 <div className="output">{this.state.total}</div>
             </div>
        ); 
    }
}


export default CalculatorDisplay; 
