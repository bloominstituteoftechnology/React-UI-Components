import React from 'react';
import './App.css';
import CalculatorContainer from './components/ButtonComponents/CalculatorContainer.js';
import Button from './components/ButtonComponents/Button.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import ClearKey from './components/ButtonComponents/ClearKey.js';
import ZeroKey from './components/ButtonComponents/ZeroKey.js';

      class App extends React.Component {
        constructor() {
          super();
         
          this.state = {
          screen: ""
           
          };
         
         this.handleClick = this.handleClick.bind(this);
        }
      
        
        render() {
          return (
            <div className="app">
              <div className="calculator-title">
                WY Calculator 
              </div>
              <div className="CalculatorContainer">
              <div className="CalculatorDisplay">{this.state.screen}  </div>
              <div className='LowerContainer'>
              <div className='LeftContainer'>
              <div className="ClearKeyContainer"><div className="ClearKey">
              <ClearKey label={'C'} handleClick={this.handleClick} type='input' /></div></div>
              <div className="NumbersContainer">
               <div className="NumberButton"> <Button label={'1'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton">  <Button label={'2'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton"> <Button label={'3'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton"> <Button label={'4'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton"> <Button label={'5'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton"> <Button label={'6'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton">  <Button label={'7'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton">  <Button label={'8'} handleClick={this.handleClick} type='input' /> </div>
               <div className="NumberButton">  <Button label={'9'} handleClick={this.handleClick} type='input' /> </div>
               
              </div> <div className="ZeroKeyContainer"> <div className="ZeroKey"><ZeroKey label={'0'} handleClick={this.handleClick} type='input' /> </div></div>
              </div>
            
              <div className="ActionButtonContainer">
               <div className="ActionButton"> <ActionButton label={'/'} handleClick={this.handleClick} type='action' /></div>
               <div className="ActionButton">  <ActionButton label={'*'} handleClick={this.handleClick} type='action' /></div>
               <div className="ActionButton">  <ActionButton label={'+'} handleClick={this.handleClick} type='action' /></div>
               <div className="ActionButton">  <ActionButton label={'-'} handleClick={this.handleClick} type='action' /></div>
               <div className="ActionButton">  <ActionButton label={'='} handleClick={this.handleClick} type='action' /></div>
               
              </div>
            </div></div></div>
          );
        }
      
       
        handleClick(event){
          const value = event.target.value; 
        
         //console.log("in the handleclick and the event is:" + event.target.value);
          switch (value) {
            case '=': { 
              //console.log("this.state.screen: " + this.state.screen)
           let temp = 0;
              temp = this.state.screen;

             
              const answer = eval(temp).toString() ;
            
              this.setState({ screen: answer });
              break;
            }
            case 'C': {
             
              this.setState({ screen: '' });
              break;
            }
            default: {
              
              this.setState({ screen: this.state.screen += value})
              break;
            }
          }
        }
      }
      
     
      export default App;