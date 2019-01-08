import React from 'react'
import './Button.css';
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonContainer = () => {
    return (
        <div className="button-container">
            <div className="number-buttons">
                <div className="row">
                    <ActionButton symbol="clear"/>
                    <ActionButton symbol='/'/>
                   
                </div>

                <div className="row">
                    <NumberButton number='7'/>
                    <NumberButton number='8'/>
                    <NumberButton number='9'/>
                    <ActionButton symbol='x'/>


                </div>
                <div className="row">
                    <NumberButton number='4'/>
                    <NumberButton number='5'/>
                    <NumberButton number='6'/>
                    <ActionButton symbol='-'/>

                </div>
                <div className="row">
                    <NumberButton number='1'/>
                    <NumberButton number='2'/>
                    <NumberButton number='3'/>
                    <ActionButton symbol='+'/>

                </div>
                <div className="row">
                    <NumberButton number='0' name="zero"/>
                    <ActionButton symbol='='/>

                </div>
            </div>
        </div>
    )
};

export default ButtonContainer;