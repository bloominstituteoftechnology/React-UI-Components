import React from 'react';
import './Button.css';

/*
    PASSABLE PROPS:
    onClick - The function called when this element is clicked.
    children (implicit) - Child elements nested under this element.
*/

class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={_ => this.props.onClick()}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
