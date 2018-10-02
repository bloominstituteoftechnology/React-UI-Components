import React from 'react';
import './Button.css';

class NumberButton extends React.Component {

       state = {
         
                one: 1,
                two: 2,
                three: 3,
                four: 4,
                five: 5,
                six: 6,
                seven: 7,
                eigth: 8,
                nine: 9        
        }
    

    render(props) {
        return (
            <div className="number">
                <button class="num-button">{this.state.one}</button>
                <button class="num-button">{this.state.two}</button>
                <button class="num-button">{this.state.three}</button> 
                <button class="num-button">{this.state.four}</button>
                <button class="num-button">{this.state.five}</button>
                <button class="num-button">{this.state.six}</button>
                <button class="num-button">{this.state.seven}</button>
                <button class="num-button">{this.state.eigth}</button>
                <button class="num-button">{this.state.nine}</button>
            </div>
        )
    }
}

export default NumberButton;