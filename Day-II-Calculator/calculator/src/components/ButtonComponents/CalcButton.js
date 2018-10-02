import React from 'react';
import './Button.css';

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default CalcButton;