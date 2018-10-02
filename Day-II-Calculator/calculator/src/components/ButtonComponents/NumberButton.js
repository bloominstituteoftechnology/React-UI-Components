import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            
                <button className= {this.props.number.font + ' ' + this.props.number.type} value = {this.props.number.number}>{this.props.number.number}</button>
        );
    }
}

export default NumberButton;

