import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.text);
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.props.buttonStyle}>{this.props.text}</button>
        )
    }
}

export default ActionButton;