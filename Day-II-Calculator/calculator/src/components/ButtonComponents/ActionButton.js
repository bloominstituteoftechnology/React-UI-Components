import React from 'react';
import './Button.css';

class ActionButton extends React.Component {

    render (props) {
        return (
            <div className="action-button">
                <button className="arithmetic-btns">{this.props.arithmetic.divide}</button>
                <button className="arithmetic-btns">{this.props.arithmetic.multiply}</button>
                <button className="arithmetic-btns">{this.props.arithmetic.subtract}</button>
                <button className="arithmetic-btns">{this.props.arithmetic.add}</button>
                <button className="arithmetic-btns">{this.props.arithmetic.equal}</button>
            </div>
        );
    }
}


export default ActionButton;

