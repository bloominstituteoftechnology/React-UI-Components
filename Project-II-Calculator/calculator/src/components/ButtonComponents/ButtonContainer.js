import React from 'react'
import './Button.css';
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonContainer = () => {
    return (
        <div className="button-container">
            <div className="number-buttons">
                <div className="row">
                <div className='clear'>
                    <ActionButton symbol="clear"/>
                    </div>
                    <div className='divide'>
                    <ActionButton symbol='/'/>
                    </div>
                   
                </div>

                <div className="row">
                    <NumberButton number='7'/>
                    <NumberButton number='8'/>
                    <NumberButton number='9'/>
                    <div className='ex'>
                    <ActionButton symbol='x'/>
                    </div>


                </div>
                <div className="row">
                    <NumberButton number='4'/>
                    <NumberButton number='5'/>
                    <NumberButton number='6'/>
                    <div className='minus'>
                    <ActionButton symbol='-'/>
                    </div>

                </div>
                <div className="row">
                    <NumberButton number='1'/>
                    <NumberButton number='2'/>
                    <NumberButton number='3'/>
                    <div className='plus'>
                    <ActionButton symbol='+'/>
                    </div>

                </div>
                <div className="row">
                <div className='zero'>
                    <NumberButton number='0' name="zero"/>
                    </div>
                    <div className='equal'>
                    <ActionButton symbol='='/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ButtonContainer;