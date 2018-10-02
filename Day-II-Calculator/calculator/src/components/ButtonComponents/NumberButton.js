import React from 'react';
import './Button.css';

class NumberButton extends React.Component {

    render(props) {
        return (
            <div className="number">
                <button class="num-button">{this.props.number.one}</button>
                <button class="num-button">{this.props.number.two}</button>
                <button class="num-button">{this.props.number.three}</button> 
                <button class="num-button">{this.props.number.four}</button>
                <button class="num-button">{this.props.number.five}</button>
                <button class="num-button">{this.props.number.six}</button>
                <button class="num-button">{this.props.number.seven}</button>
                <button class="num-button">{this.props.number.eigth}</button>
                <button class="num-button">{this.props.number.nine}</button>
            </div>
        )
    }
}

export default NumberButton;