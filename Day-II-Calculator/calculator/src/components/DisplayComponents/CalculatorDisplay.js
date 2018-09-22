import React from 'react';
import './Display.css';


class CalculatorDisplay extends React.Component{
    render(){
    return(
        <div>{this.props.initialValue}</div>
    )
}
}

export default CalculatorDisplay;