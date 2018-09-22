import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {total: 0};
      }
    render(){
        return(
            <div>
                {this.state.total}
            </div>
    )
}
}

export default CalculatorDisplay;