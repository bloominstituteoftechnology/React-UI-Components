import React from 'react';
import './Button.css';

class FunctionButton extends React.Component {
    constructor () {
        super()
        this.state={}
    }

    render(props) {
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
}

export default FunctionButton;

/* <Button text={'X'} onClick={this.handleClick} value='*' />

text is the symbol that shows
value is what it will do (operator or clear) */


// const FunctionButton = (props) => {
//     return (
//         <button className={props.buttonStyle}>{props.text}</button>
//     )
// };