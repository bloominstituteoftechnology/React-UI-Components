import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

// const App = () => {
//   return (
//     <div className= "container calContainer"> 

//       <CalculatorDisplay result="0"/>

      // <ActionButton text= "clear" buttonStyle = "large"/>
      // <ActionButton text = "÷" buttonStyle = "operator"/>

      // <NumberButton text = "7" buttonStyle = "num"/>
      // <NumberButton text = "8" buttonStyle = "num"/>
      // <NumberButton text = "9" buttonStyle = "num"/>
      // <ActionButton text = "x" buttonStyle = "operator"/>

      // <NumberButton text = "4" buttonStyle = "num"/>
      // <NumberButton text = "5" buttonStyle = "num"/>
      // <NumberButton text = "6" buttonStyle = "num"/>
      // <ActionButton text = "-" buttonStyle = "operator"/>

      // <NumberButton text = "1" buttonStyle = "num"/>
      // <NumberButton text = "2" buttonStyle = "num"/>
      // <NumberButton text = "3" buttonStyle = "num"/>
      // <ActionButton text = "+" buttonStyle = "operator"/>

      // <ActionButton text= "0" buttonStyle = "large num"/>
      // <ActionButton text = "=" buttonStyle = "operator"/>  

//     </div>    
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        result: '0',
      }    
  }

  handleClick(i) {
    let result = this.state.result;

    if (i === "clear") {
      result = '0';
      console.log('clear');
    }

    if (typeof i === 'number') {
      if (result[result.length-1] == "0" && result.length == 1) {
      result = result.substring(0, result.length - 1) + i;
      
    }else{
      result += i;
    }        
  }
    this.setState({
      result: result,
    })
    console.log(result);
    }  

    

  
  render (){
    return (
    <div  className= "container calContainer">
      <CalculatorDisplay result= {this.state.result}/>  

      <ActionButton text= "clear" buttonStyle = "large"  onClick={() => this.handleClick("clear")}/>
      <ActionButton text = "÷" buttonStyle = "operator"/>

      <NumberButton text = "7" buttonStyle = "num" onClick={() => this.handleClick(7)}/>
      <NumberButton text = "8" buttonStyle = "num" onClick={() => this.handleClick(8)}/>
      <NumberButton text = "9" buttonStyle = "num" onClick={() => this.handleClick(9)}/>
      <ActionButton text = "x" buttonStyle = "operator"/>

      <NumberButton text = "4" buttonStyle = "num" onClick={() => this.handleClick(4)}/>
      <NumberButton text = "5" buttonStyle = "num" onClick={() => this.handleClick(5)}/>
      <NumberButton text = "6" buttonStyle = "num" onClick={() => this.handleClick(6)}/>
      <ActionButton text = "-" buttonStyle = "operator"/>

      <NumberButton text = "1" buttonStyle = "num" onClick={() => this.handleClick(1)}/>
      <NumberButton text = "2" buttonStyle = "num" onClick={() => this.handleClick(2)}/>
      <NumberButton text = "3" buttonStyle = "num" onClick={() => this.handleClick(3)}/>
      <ActionButton text = "+" buttonStyle = "operator"/>

      <ActionButton text= "0" buttonStyle = "large num" onClick={() => this.handleClick(0)}/>
      <ActionButton text = "=" buttonStyle = "operator"/>  

  

    </div>  
    
    )
  }
}

export default App;
