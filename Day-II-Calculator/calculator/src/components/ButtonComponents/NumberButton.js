import React from 'react';
import './Button.css';

const Numbers = () => {
    return (
    <div className="nums">
        <div className="big-buttons">clear</div>
        <div className="nums-row">
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
        </div>
        <div className="nums-row">
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
        </div>
        <div className="nums-row">
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
        </div>
        <div className="big-buttons">0</div>
    </div>
    );
}

export default Numbers;