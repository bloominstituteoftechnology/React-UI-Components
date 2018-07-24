import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

class NumberButton extends React.Component {
    constructor(props){
        super(props)
    console.log(props);  
    console.log(this.state);       
    }


    render() {
       return (
             
                <div className= "pressingItems">

                    <div className="numberInputs">
                        <div  onClick = {this.props.handleClearClick}className="clear">{this.props.clear}</div>

                        <div onClick={ () => this.props.handleButtonClick(this.props.seven)  } className="nonzero sm">{this.props.seven}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.eight)}className="nonzero">{this.props.eight}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.nine)}className="nonzero">{this.props.nine}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.four)}className="nonzero sm">{this.props.four}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.five)}className="nonzero">{this.props.five}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.six)}className="nonzero">{this.props.six}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.one)}className="nonzero sm">{this.props.one}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.two)}className="nonzero">{this.props.two}</div>
                        <div onClick={() => this.props.handleButtonClick(this.props.three)}className="nonzero">{this.props.three}</div>

                        <div onClick={() => this.props.handleButtonClick(this.props.zero)}className="clear zero">{this.props.zero}</div>
                    </div>
                    <ActionButton />
                </div>
        ); 
    }
}


export default NumberButton; 
