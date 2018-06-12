import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    render() {
        return <button className={`btn ${this.props.defaultStyle}`} onClick={this.props.onClick}>{this.props.name}</button>
    }   
};

ActionButton.defaultProps = {
    name: 0,
    defaultStyle: "action-btn",
};

export default ActionButton;