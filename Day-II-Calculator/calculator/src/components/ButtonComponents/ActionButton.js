import React from 'react';
import './Button.css';
import logic from '../../CalculatorLogic.js'

class ActionButton extends React.Component{
    constructor(props){
        super(props)
        this.buttonStyle = props.buttonStyle;
        this.text = props.text;
        this.displayCharacter = props.displayType
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let last = logic.display.length - 1;

        if(logic.isReset){
            logic.isReset = false;
            logic.display = '0';
        }

        if(this.displayCharacter === 'clear'){
            logic.display = '0';
        }

        if(logic.display.length > 1 || logic.display[last] === '1' || logic.display[last] === '2' || logic.display[last] === '3' || logic.display[last] === '4' || logic.display[last] === '5' ||
           logic.display[last] === '6' || logic.display[last] === '7' || logic.display[last] === '8' || logic.display[last] === '9'){
            logic.display += this.displayCharacter;
        }

        this.props.clickedButton(logic.display);
    }

    render(){
        return (
            <button className={this.buttonStyle} onClick={this.handleClick}><div>{this.text}</div></button>
        )
    }
}

export default ActionButton;