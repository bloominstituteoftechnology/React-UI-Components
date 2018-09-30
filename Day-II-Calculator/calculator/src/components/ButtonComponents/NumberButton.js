import React from 'react';
import './Button.css';


class NumberButton extends React.Component {
    render (props) {
        return (
            <button 
                className={this.props.buttonStyle}
                onClick={this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value}
            >
            {this.props.text}
            </button>
        )
    }
};

export default NumberButton;




// const NumberButton = (props) => {
//     return (
//             <button className={props.buttonStyle}>{props.text}</button>
//     )
// };