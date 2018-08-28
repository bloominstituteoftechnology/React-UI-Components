import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
        <div className="numbers">
            <h3 className="clear">clear</h3>
            <h2>7</h2>
            <h2>8</h2>
            <h2>9</h2>
            <h2>4</h2>
            <h2>5</h2>
            <h2>6</h2>
            <h2>1</h2>
            <h2>2</h2>
            <h2>3</h2>
            <h3 className="zero">0</h3>
        </div>
    );
};

export default NumberButton;