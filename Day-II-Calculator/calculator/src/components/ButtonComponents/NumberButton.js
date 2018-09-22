import React from 'react';
import './Button.css';


class NumberButton extends React.Component {
    render(){
        return(
            <div className={this.props.buttonStyle}>
                {this.props.displaySymbol}
            </div>
        )
    }
}

export default NumberButton;

