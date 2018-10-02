import React from 'react';
import './Button.css';

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.calculator = props.parent;
        this.action = props.action;
    }
    render() {
        let classString = 'calc-button';
        if(this.props.className){
            classString = this.props.className + ' ' + classString;
        }
        return (
            <div
                className={classString}
                onClick={this.handleClick.bind(this)}
            >
                {this.props.children || this.props.action}
            </div>
        );
    }
    handleClick() {
        this.calculator.handleAction(this.action);
    }
}

export default CalcButton;