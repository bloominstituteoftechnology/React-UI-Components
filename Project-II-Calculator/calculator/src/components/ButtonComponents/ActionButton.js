import React from 'react';
import './Button.css';

export class ActionButton extends React.Component {
    state = {
        actions: [
            {symbol: "÷"},
            {symbol: "X"},
            {symbol: "-"},
            {symbol: "+"},
            {symbol: "="}
        ]
    }

    render() {
        return (
            <div className="act">
                <div className="sym">
                    {this.state.actions[0].symbol}
                </div>  
                <div className="sym">
                    {this.state.actions[1].symbol}
                </div>  
                <div className="sym">
                    {this.state.actions[2].symbol}
                </div>  
                <div className="sym">
                    {this.state.actions[3].symbol}
                </div>  
                <div className="sym">
                    {this.state.actions[4].symbol}
                </div>  
            </div>
        );
    }
}
