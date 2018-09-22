import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    render() {
        return(
            <div className={this.props.buttonStyle}>
                {this.props.action}
            </div>
        )
    }
}

export default ActionButton;