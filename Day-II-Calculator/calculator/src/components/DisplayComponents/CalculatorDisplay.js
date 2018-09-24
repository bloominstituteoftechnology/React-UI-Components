import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: props.display
        }
    }

    componentWillReceiveProps = (props)=>{
        this.setState({display: props.display});
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