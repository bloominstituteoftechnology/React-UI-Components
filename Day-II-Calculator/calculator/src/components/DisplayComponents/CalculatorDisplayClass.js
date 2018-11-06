import React from 'react';
import './Display.css';


class CalculatorDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {content: 0};
    }
    render () {
        return <div className='calc-display'>{this.state.content}</div>;
    };
    changeContent (displayThis) {
        this.setState(state => {content: displayThis})
    }
}

export default CalculatorDisplay;