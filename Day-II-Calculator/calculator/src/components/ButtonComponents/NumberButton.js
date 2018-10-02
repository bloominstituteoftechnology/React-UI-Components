import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    numClickEvent = event => {
        console.log(event.target);
    };

    render() {
        return (
            
                <button onClick= {this.numClickEvent} className= {this.props.number.font + ' ' + this.props.number.type}>{this.props.number.number}</button>
        );
    }
}

export default NumberButton;

