import React from 'react';
import './Display.css';
import NumPad from './NumPad.js';
import OperatorPad from './OperatorPad.js';

class ButtonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.customClass = "buttonDisplay"; //todo: figure out default
        this.buttons = props.buttons;
        this.operators = props.operators;
        this.handleChange = props.handleChange;
    }

    render() {
        return (
            <div className={this.customClass}>
                <NumPad buttons={this.buttons} handleChange={this.handleChange}/>
                <OperatorPad operators={this.operators} handleChange={this.handleChange} />
            </div>
        );
    }
};


export default ButtonDisplay;