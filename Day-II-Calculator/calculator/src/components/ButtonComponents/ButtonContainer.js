import React from 'react';
import './Button.css';
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";



const ButtonContainer = (props) => {

    return (
        <div className="keyPad" >
        <div className="numWrap">
            <ActionButton buttonStyle={'clearBtn clear'} text={'clear'} />
            <NumberButton buttonStyle={'numKey operator'} text={"÷"}/>
            <NumberButton buttonStyle={'numKey'} text={"7"}/>
            <NumberButton buttonStyle={'numKey'} text={"8"}/>
            <NumberButton buttonStyle={'numKey'} text={"9"}/>
            <NumberButton buttonStyle={'numKey operator'} text={"✕"}/>
            <NumberButton buttonStyle={'numKey'} text={"4"}/>
            <NumberButton buttonStyle={'numKey'} text={"5"}/>
            <NumberButton buttonStyle={'numKey'} text={"6"}/>
            <NumberButton buttonStyle={'numKey operator'} text={"-"}/>
            <NumberButton buttonStyle={'numKey'} text={"3"}/>
            <NumberButton buttonStyle={'numKey'} text={"2"}/>
            <NumberButton buttonStyle={'numKey'} text={"1"}/>
            <NumberButton buttonStyle={'numKey operator'} text={"+"}/>
            <ActionButton buttonStyle={'zeroBtn zero'} text={'0'} />
            <NumberButton buttonStyle={'numKey operator'} text={"="}/>
        </div>

        






        </div>
    )

}


export default ButtonContainer;