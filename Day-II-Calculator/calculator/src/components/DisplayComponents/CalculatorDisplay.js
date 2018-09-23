import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = props.state;
    }

    render(){
        return(
            <div className="display">
                <p>{this.state.display}</p>
            </div>
        )
    }
}

export default CalculatorDisplay;