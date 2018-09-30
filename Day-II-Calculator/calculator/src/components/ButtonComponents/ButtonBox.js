import React from 'react';
import './Button.css';
import Keypad from './Keypad';
import FunctionButton from './FunctionButton';

class ButtonBox extends React.Component {
    constructor () {
        super()
        this.state={}
    }
    render () {
        return (
        <div className="button-box">
        <Keypad/>
            <div className="function-box">
            <FunctionButton buttonStyle="function" onClick={this.handleClick} value={'/'} text="÷" />
            <FunctionButton buttonStyle="function" onClick={this.handleClick} value={'*'} text="×" />
            <FunctionButton buttonStyle="function" onClick={this.handleClick} value={'-'} text="−" />
            <FunctionButton buttonStyle="function" onClick={this.handleClick} value={'+'} text="+" />
            <FunctionButton buttonStyle="function" onClick={this.handleClick} value={'equal'} text="=" />
            </div>
        </div>
        );
    }
}





export default ButtonBox;




// const ButtonBox = () => {
//     return (
//         <div className="button-box">
//         <Keypad/>
//             <div className="function-box">
//             <FunctionButton buttonStyle="function" text="÷" />
//             <FunctionButton buttonStyle="function" text="×" />
//             <FunctionButton buttonStyle="function" text="−" />
//             <FunctionButton buttonStyle="function" text="+" />
//             <FunctionButton buttonStyle="function" text="=" />
//             </div>
//         </div>
//     )
// };

