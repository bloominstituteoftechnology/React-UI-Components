import React from 'react';
import './Button.css';

class CalcButton extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return <button className={this.props.buttonStyle}>{this.props.text}</button>;
    };
}

export default CalcButton;