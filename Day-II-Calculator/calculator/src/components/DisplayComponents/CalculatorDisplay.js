import React, {Component} from 'react';
// import './Display.css';
import NumberDisplay from './NumberDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

// const CalculatorDisplay = props => {
//     console.log(props);
//   return (
//       <div className="calc-container">
//        <NumberDisplay number = {0} />
//        <ActionButton text="clear" className="clearNum"/>
//        <ActionButton text="&divide;" className="divide"/>
//        <NumberButton number= {7} className="seven" />
//        <NumberButton number= {8} className="eight" />
//        <NumberButton number= {9} className="nine" />
//        <ActionButton text="&times;" className="multiply"/>
//        <NumberButton number= {4} className="four" />
//        <NumberButton number= {5} className="five" />
//        <NumberButton number= {6} className="six" />
//        <ActionButton text="&#8722;" className="minus"/>
//        <NumberButton number= {1} className="one" />
//        <NumberButton number= {2} className="two" />
//        <NumberButton number= {3} className="three" />
//        <ActionButton text="+" className="plus"/>
//        <NumberButton number= {0} className="zero" />
//        <ActionButton text="=" className="equals" />
//       </div>
//   );
// };


class CalculatorDisplay extends Component{
    constructor (props) {
        super(props);
        this.state = {
            numbers: [],
            display: 0,
            memory: '',
        }
        this.numberClick = this.numberClick.bind(this)
    }

    // ActionMethod = (event) => {
    //     this.setState({
    //         // numbers: {
    //         //     [event.target.state]:event.state.clicks
    //         // }
    //         numbers: event.state.numbers + 
    //     })
    // }

    numberClick = (event) => {
        // console.log(event.target)
        console.log(event.target.innerText)
        console.log("clicked")
        this.setState({
            display: event.target.innerText
            })
    }

    actionClick = (event) => {
        this.setState({
            display: event.target.innerText
            })
    }

     clearCalc = (event)  => {
          this.setState({
            display: event.target.innerText = 0,
            text: event.target.innerText ='clear'
          })
      }

render (){
    console.log(this.state)
  return (
      <div className="calc-container">
       <NumberDisplay number = {this.state.display} />
       <ActionButton handleClick={this.clearCalc} text="clear" className="clearNum"/>
       <ActionButton handleClick={this.actionClick} text="&divide;" className="divide"/>
       <NumberButton handleClick={this.numberClick} number= {7} className="seven" />
       <NumberButton handleClick={this.numberClick} number= {8} className="eight" />
       <NumberButton handleClick={this.numberClick} number= {9} className="nine" />
       <ActionButton handleClick={this.actionClick} text="&times;" className="multiply"/>
       <NumberButton handleClick={this.numberClick} number= {4} className="four" />
       <NumberButton handleClick={this.numberClick} number= {5} className="five" />
       <NumberButton handleClick={this.numberClick} number= {6} className="six" />
       <ActionButton handleClick={this.actionClick} text="&#8722;" className="minus"/>
       <NumberButton handleClick={this.numberClick} number= {1} className="one" />
       <NumberButton handleClick={this.numberClick} number= {2} className="two" />
       <NumberButton handleClick={this.numberClick} number= {3} className="three" />
       <ActionButton handleClick={this.actionClick} text="+" className="plus"/>
       <NumberButton handleClick={this.numberClick} number= {0} className="zero" />
       <ActionButton handleClick={this.actionClick} text="=" className="equals" />
      </div>
        );
    }
};

export default CalculatorDisplay;