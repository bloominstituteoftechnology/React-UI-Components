import React from 'react';
import './Button.css';
import logic from '../../CalculatorLogic.js'

class NumberButton extends React.Component{
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

        if(logic.display === '0' && this.displayCharacter !== '+' && this.displayCharacter !== '-' && this.displayCharacter !== '*' && this.displayCharacter !== '/'){
            logic.display = this.displayCharacter;
        }

        else if(logic.display[last] === '+' || logic.display[last] === '-' || logic.display[last] === '*' || logic.display[last] === '/' ||
                this.displayCharacter === '+' || this.displayCharacter === '-' || this.displayCharacter === '*' || this.displayCharacter === '/'){
            logic.display += ' ' + this.displayCharacter;
        }
        
        else if(logic.display[last] === '='){
            this.props.clickedButton();
        }

        else if(this.displayCharacter !== '+' && this.displayCharacter !== '-' && this.displayCharacter !== '*' && this.displayCharacter !== '/'){
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

export default NumberButton;