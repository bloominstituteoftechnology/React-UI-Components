import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'; 
/* import ActionButton from './components/ButtonComponents/ActionButton.js'; */
import CalculatorContainer from './components/ButtonComponents/CalculatorContainer.js';
import Screen from './components/DisplayComponents/Screen.js';
import Button from './components/ButtonComponents/Button.js';

/* const App = () => {
  return (
  <div className="CalculatorContainer">
      <CalculatorContainer /></div>);};export default App; */

      class App extends React.Component {
        constructor() {
          super();
          // set our default state
          this.state = {
            question: '',
            answer: ''
          }
          // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
          // We did this because 'this' would refer to the source of the click events
          this.handleClick = this.handleClick.bind(this);
        }
      
        // Render function to creat component to be rendered on the DOM.
        // This method must return a single parent element as you can see here. 
        // The component is wrapped around () to make it a single expression.
        render() {
          return (
            <div className="app">
              <div className="calculator-title">
                W_Y Calculator <CalculatorContainer />
              </div>
              <Screen question={this.state.question} answer={this.state.answer}/>
              <div className="button-row">
                <Button label={'1'} handleClick={this.handleClick} type='input' />
                <Button label={'2'} handleClick={this.handleClick} type='input' />
                <Button label={'3'} handleClick={this.handleClick} type='input' />
                <Button label={'4'} handleClick={this.handleClick} type='input' />
                <Button label={'-'} handleClick={this.handleClick} type='action' />
                <Button label={'+'} handleClick={this.handleClick} type='action' />
              </div>
              <div className="button-row">
                <Button label={'5'} handleClick={this.handleClick} type='input' />
                <Button label={'6'} handleClick={this.handleClick} type='input' />
                <Button label={'7'} handleClick={this.handleClick} type='input' />
                <Button label={'8'} handleClick={this.handleClick} type='input' />
                <Button label={'*'} handleClick={this.handleClick} type='action' />
                <Button label={'/'} handleClick={this.handleClick} type='action' />
              </div>
              <div className="button-row">
                <Button label={'9'} handleClick={this.handleClick} type='input' />
                <Button label={'.'} handleClick={this.handleClick} type='input' />
                <Button label={'0'} handleClick={this.handleClick} type='input' />
                <Button label={'C'} handleClick={this.handleClick} type='action' />
                <Button label={'='} handleClick={this.handleClick} type='action' />
              </div>
            </div>
          );
        }
      
        // our method to handle all click events from our buttons
        handleClick(event){
          const value = event.target.value; // get the value from the target element (button)
         
         console.log("in the handleclick and the event is:" + event.target.value);
          switch (value) {
            case '=': { // if it's an equal sign, use the eval module to evaluate the question
              // convert the answer (in number) to String
              const answer = eval(this.state.question).toString();
              // update answer in our state.
              this.setState({ answer });
              break;
            }
            case 'C': {
              // if it's the Cls sign, just clean our question and answer in the state
              this.setState({ question: '', answer: '' });
              break;
            }
            default: {
              // for every other commmand, update the answer in the state
              this.setState({ question: this.state.question += value})
              break;
            }
          }
        }
      }
      
      // export our frame component. To be used in our client/index.js file
      export default App;