import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';






class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {total: 0, list: [0], display: "0", lastChar : "", characters :["*", "+", "/"], minusSign : "-", neg: false}
    this.addToDisplay = this.addToDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this); 
    this.equalDisplay = this.equalDisplay.bind(this); 
    this.checkCharacterLength = this.checkCharacterLength.bind(this); 
    
  }
  
  addToDisplay(item){
    //on click of one of the buttons we will add its text/prop to the display. it will also add to the list property in the state object.
    console.log(this.state.display, "test")
    
    console.log(this.state.neg); 
    console.log(this.state.lastChar,"last");

    if(this.state.display[this.state.display.length-2]+ this.state.display[this.state.display.length-1] === " -"){
      console.log("negative")
    }
    
    if(this.state.display === "0" && !this.state.characters.includes(item)){
      this.state.display = item; 
      this.state.lastChar = item; 
    } else if (this.state.display === this.state.minusSign && item === this.state.minusSign) {
      this.state.display = "0";
      this.state.lastChar = "0";//Toggle on and off for first value negative. 
    }else if (item === this.state.minusSign && this.state.lastChar === this.state.minusSign) {
      this.state.display += " ";
      this.state.display += item;
      this.state.lastChar = item;
      this.state.neg = true; 
    }
    
    else if(this.state.characters.includes(item) && !this.state.characters.includes(this.state.lastChar)){
      this.state.display += item; 
      this.state.lastChar = item; 
    } else if (!this.state.characters.includes(item)){
      this.state.display += item;
      this.state.lastChar = item; 
    }
    
    this.state.lastChar === this.state.minus ? this.state.neg = true : this.state.neg = false;

    this.setState(this.state);
    this.checkCharacterLength()
    //document.getElementById('onScreen').innerHTML =this.state.display
  }

  clearDisplay() {
    this.state.display = "0";
    document.getElementById('onScreen').innerHTML = "0"
    this.setState(this.state);
    document.getElementById('onScreen').style.fontSize = '70px';

  }
  equalDisplay() {
    
    if(this.state.characters.includes(this.state.lastChar)){
      this.state.display = this.state.display.substring(0, this.state.display.length -1)
    }
    console.log(eval(this.state.display));
    this.state.display = eval(this.state.display);
    this.setState(this.state);
    //document.getElementById('onScreen').innerHTML =this.state.display
    this.checkCharacterLength()
  }

  checkCharacterLength() {
    if(this.state.display.length >= 12){
      document.getElementById('onScreen').style.fontSize = '20px';
    }
  }


  render(){

    return (
      <div className = "main-div">
        <CalculatorDisplay  displayValue ={this.state.display} />
        <NumberButton one= "1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"
         handleButtonClick = {item => this.addToDisplay(item) } handleClearClick = {this.clearDisplay}  handleEqualClick = {this.equalDisplay}
         />
      </div>
    );

  }
}

export default App;
