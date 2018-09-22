import React from 'react';
import './Button.css';




class NumberButton extends React.Component{ 
    constructor(props){
    super(props);
    
}

clickHandler = () => {
        console.log('hello');
}

    render(){
    return(
        <div>
        <button className={this.props.buttonStyle} onClick={this.clickHandler}>{this.props.text}</button>
        </div>
    )
}
}

export default NumberButton;