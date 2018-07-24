import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

class NumberButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
       return (
             
                <div className= "pressingItems">

                    <div className="numberInputs">
                        <div className="clear">{this.props.clear}</div>

                        <div className="nonzero sm">{this.props.seven}</div>
                        <div className="nonzero">{this.props.eight}</div>
                        <div className="nonzero">{this.props.nine}</div>
                        <div className="nonzero sm">{this.props.four}</div>
                        <div className="nonzero">{this.props.five}</div>
                        <div className="nonzero">{this.props.six}</div>
                        <div className="nonzero sm">{this.props.one}</div>
                        <div className="nonzero">{this.props.two}</div>
                        <div className="nonzero">{this.props.three}</div>

                        <div className="clear zero">{this.props.zero}</div>
                    </div>
                    <ActionButton />
                </div>
        ); 
    }
}


export default NumberButton; 
