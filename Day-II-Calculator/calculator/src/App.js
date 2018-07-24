import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';




// const App = () => {
//   return (
//     <div className = "main-div">
//       <CalculatorDisplay />
//       <NumberButton one="1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"/>
//     </div>
//   );
// };

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {total: 0, list: [0], display: "0"}
    this.addToDisplay = this.addToDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this); 
    
  }

  addToDisplay(item){
    //on click of one of the buttons we will add its text/prop to the display. it will also add to the list property in the state object.
    
    // this.state.total = this.state.total + 1 
    // console.log(this.state.total)
    // console.log(this.state.total)
    console.log(item)
    const screen = document.querySelector('#onScreen');
    console.log(screen);
    const add = document.createTextNode(item); 
     
    screen.appendChild(add);
     
  }

  clearDisplay() {
    this.state.display = "0";
    document.getElementById('onScreen').innerHTML = "0"
    this.setState(this.state);
    console.log("clear");

  }


  render(){

    return (
      <div className = "main-div">
        <CalculatorDisplay />
        <NumberButton one= "1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"
         handleButtonClick = {item => this.addToDisplay(item) } handleClearClick = {this.clearDisplay} />
      </div>
    );

  }
}

export default App;
