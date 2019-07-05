import React from 'react';
import './Button.css';

export class ActionButton extends React.Component {
    render() {
        const symbol = (this.props.symbol)
        
        return (
                <div className="sym">
                    {symbol}
                </div>  
        );
    }
}

ActionButton.defaultProps = {symbol: "÷"}