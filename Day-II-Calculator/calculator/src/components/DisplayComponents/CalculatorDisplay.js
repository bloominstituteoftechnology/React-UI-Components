import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from "../ButtonComponents/ActionButton";

const CalculatorDisplay = () => {
    return (
        <div className="container border">
            <div className="row d-flex justify-content-end align-items-center bg-dark text-white text-center border"><h1>0</h1></div>
            <div className="row">
                <div className="col-9 d-flex justify-content-center align-items-center bg-light border"><ActionButton text="clear" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-danger text-white border"><NumberButton text="÷" /></div>
            </div>
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="7" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="8" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="9" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-danger text-white border"><NumberButton text="×" /></div>
            </div>
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="4" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="5" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="6" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-danger text-white border"><NumberButton text="−" /></div>
            </div>
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="1" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="2" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-light border"><NumberButton text="3" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-danger text-white border"><NumberButton text="+" /></div>
            </div>
            <div className="row">
                <div className="col-9 d-flex justify-content-center align-items-center bg-light border"><ActionButton text="0" /></div>
                <div className="col-3 d-flex justify-content-center align-items-center bg-danger text-white border"><NumberButton text="=" /></div>
            </div>
        </div>
    );
};

export default CalculatorDisplay;