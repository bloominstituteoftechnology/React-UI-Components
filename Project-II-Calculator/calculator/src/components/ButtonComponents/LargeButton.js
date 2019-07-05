import React from 'react';
import './Button.css';

export class LargeButton extends React.Component {
    render() {
        const text = (this.props.text)
        
        return (
                <div className="lgBtn">
                    {text}
                </div>  
        );
    }
}

LargeButton.defaultProps = {text: 0}
