import React, {Component} from 'react';
// import './Display.css';
import NumberDisplay from './NumberDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


class CalculatorDisplay extends Component{
    constructor (props) {
        super(props);
        this.state = {
            display: '0',
            equation: {
                numbers: [],
                sign: []
            }
        };
    }

    numberClick = event => {
        // console.log(event.target.innerText);
        if (this.state.display === "0") {
          this.setState({ display: event.target.innerText });
          return;
        }
        this.setState({ display: this.state.display + event.target.innerText });
      };

    operator = event => {
        this.setState({
          ...this.state,
          display: "0",
          equation: {
            numbers: [...this.state.equation.numbers, this.state.display],
            sign: [...this.state.equation.sign, event.target.innerText]
          }
        });
      };
    

      equal = () => {
        let numbers = this.state.equation.numbers.map(number => Number(number));
        numbers = [...numbers, Number(this.state.display)];
        const signs = this.state.equation.sign;
        let total = numbers[0];
        for (let i = 1; i < numbers.length + 1; i++) {
          if (signs[0] === "+") {
            total += numbers[i];
            signs.shift();
          } else if (signs[0] === "-") {
            total -= numbers[i];
            signs.shift();
          } else if (signs[0] === "x") {
            total *= numbers[i];
            signs.shift();
          } else if (signs[0] === "/") {
            total /= numbers[i];
            signs.shift();
          }
        }

        total = total.toString();
        this.setState({
          ...this.state,
          display: total,
          equation: {
            numbers: [],
            sign: []
          }
        });
      };

     clearCalc = (event)  => {
          this.setState({
            display: '0',
            equation: {
                numbers: [],
                sign: []
              }
          })
      }

render (){
  return (
      <div className="calc-container">
       <NumberDisplay number = {this.state.display} />
       <ActionButton handleClick={this.clearCalc} text="clear" className="clearNum"/>
       <ActionButton handleClick={this.operator} text="/" className="divide"/>
       <NumberButton handleClick={this.numberClick} number= {7} className="seven" />
       <NumberButton handleClick={this.numberClick} number= {8} className="eight" />
       <NumberButton handleClick={this.numberClick} number= {9} className="nine" />
       <ActionButton handleClick={this.operator} text="x" className="multiply"/>
       <NumberButton handleClick={this.numberClick} number= {4} className="four" />
       <NumberButton handleClick={this.numberClick} number= {5} className="five" />
       <NumberButton handleClick={this.numberClick} number= {6} className="six" />
       <ActionButton handleClick={this.operator} text="-" className="minus"/>
       <NumberButton handleClick={this.numberClick} number= {1} className="one" />
       <NumberButton handleClick={this.numberClick} number= {2} className="two" />
       <NumberButton handleClick={this.numberClick} number= {3} className="three" />
       <ActionButton handleClick={this.operator} text="+" className="plus" />
       <NumberButton handleClick={this.numberClick} number= {0} className="zero" />
       <ActionButton handleClick={this.equal} text="=" className="equals" />
      </div>
        );
    }
};

export default CalculatorDisplay;