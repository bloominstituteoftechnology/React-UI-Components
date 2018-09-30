import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


class Keypad extends React.Component {
    constructor () {
        super()
        this.state={};
    }
    render () {
        return (
            <div className="keypad">
            <ActionButton buttonStyle="action clear" onClick={this.handleClick} value={'clear'} text="clear" />
            <div className="number-box">
                <NumberButton buttonStyle="number top left" onClick={this.handleClick} value={'7'} text="7"/>
                <NumberButton buttonStyle="number top center" onClick={this.handleClick} value={'8'} text="8"/>
                <NumberButton buttonStyle="number top right" onClick={this.handleClick} value={'9'} text="9"/>
                <NumberButton buttonStyle="number middle left" onClick={this.handleClick} value={'4'} text="4"/>
                <NumberButton buttonStyle="number middle center" onClick={this.handleClick} value={'5'} text="5"/>
                <NumberButton buttonStyle="number middle right" onClick={this.handleClick} value={'6'} text="6"/>
                <NumberButton buttonStyle="number bottom left" onClick={this.handleClick} value={'1'} text="1"/>
                <NumberButton buttonStyle="number bottom center" onClick={this.handleClick} value={'2'} text="2"/>
                <NumberButton buttonStyle="number bottom right" onClick={this.handleClick} value={'3'} text="3"/>
            </div>
            <ActionButton buttonStyle="action zero" onClick={this.handleClick} value={'0'} text="0" />
        </div>
        )
    }
}

export default Keypad;


// const Keypad = () => {
//     return (
//         <div className="keypad">
//             <ActionButton buttonStyle="action clear" text="clear" />
//             <div className="number-box">
//                 <NumberButton buttonStyle="number top left" text="7"/>
//                 <NumberButton buttonStyle="number top center" text="8"/>
//                 <NumberButton buttonStyle="number top right" text="9"/>
//                 <NumberButton buttonStyle="number middle left" text="4"/>
//                 <NumberButton buttonStyle="number middle center" text="5"/>
//                 <NumberButton buttonStyle="number middle right" text="6"/>
//                 <NumberButton buttonStyle="number bottom left" text="1"/>
//                 <NumberButton buttonStyle="number bottom center" text="2"/>
//                 <NumberButton buttonStyle="number bottom right" text="3"/>
//             </div>
//             <ActionButton buttonStyle="action zero" text="0" />
//         </div>
//     )
// };