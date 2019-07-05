import React from 'react';
import './Button.css';

export class NumberButton extends React.Component {
    render() {
        const text = (this.props.text)
        
        return (
                <div className="btn">
                    {text}
                </div>  
        );
    }
}

NumberButton.defaultProps = {text: 0}
