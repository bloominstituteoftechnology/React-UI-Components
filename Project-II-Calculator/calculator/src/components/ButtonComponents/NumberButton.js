import React from 'react';
import './Button.css';

export class NumberButton extends React.Component {
    state = {
        numbers: [
            {digit: 0},
            {digit: 1},
            {digit: 2},
            {digit: 3},
            {digit: 4},
            {digit: 5},
            {digit: 6},
            {digit: 7},
            {digit: 8},
            {digit: 9}
        ]
    }

    render() {        
        return (
                <div className="nums">
                <div className="btn">
                    {this.state.numbers[7].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[8].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[9].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[4].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[5].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[6].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[1].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[2].digit}
                </div>  
                <div className="btn">
                    {this.state.numbers[3].digit}
                </div> 
                <div className="lgBtn">
                    {this.state.numbers[0].digit}
                </div>  
            </div>
        );
    }
}
