import React from 'react';
import './Display.css';

class CalcDisplay extends React.Component {
    render() {
        return <div className="calc-display"><p>{this.props.result}</p></div>;
    }
};

CalcDisplay.defaultProps = {result: 0};

export default CalcDisplay;