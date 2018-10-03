import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { total: 0,
                   displayNum: '0',
                   currentOperator: '',
                   opBtnStyle: 'red',
                   opOne: '', //operandOne 
                   aO: '' //activeOperator sign in display (plus, minus, etc.)
                  };
    this.aTDoC = this.aTDoC.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.activeOperator = this.activeOperator.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  /* add to display on click */
  aTDoC(number){
    let numberArr = this.state.displayNum;
    if(this.state.displayNum === '0'){
    numberArr = '';  
    numberArr += number; 
    this.setState({displayNum: numberArr})
    }
    else{
      numberArr += number;
      this.setState({displayNum: numberArr})
    } 
  }

  clearDisplay(){
    this.setState({displayNum: '0', opOne: '', aO: ''});
  }

  activeOperator(txt){

    if(txt === this.state.aO){
      this.setState({aO: '', opOne: ''})
    }
    else {
      switch(txt){
        case 'min': 
        this.setState({aO: txt, opOne: this.state.displayNum});
        this.state.displayNum = '0';
        break;
        case 'div': 
        this.setState({aO: txt, opOne: this.state.displayNum});
        this.state.displayNum = '0';
        break;
        case 'plus': 
        this.setState({aO: txt, opOne: this.state.displayNum});
        this.state.displayNum = '0';
        break;
        case 'mult': 
        this.setState({aO: txt, opOne: this.state.displayNum});
        this.state.displayNum = '0';
        break;
      }
    }
  }

  calculate(op1,op2,opSign){
    let total;
    switch(opSign){
      case 'min':
        op1 = Number(op1);
        op2 = Number(op2);
        total = op1 - op2; 
        total.toString();
        this.setState({displayNum: total});
        this.setState({aO: '', opOne: ''});
        
        break;
        case 'div': 
        op1 = Number(op1);
        op2 = Number(op2);
        total = op1 / op2; 
        total.toString();
        this.setState({displayNum: total});
        this.setState({aO: '', opOne: ''});
        break;
        case 'plus': 
        op1 = Number(op1);
        op2 = Number(op2);
        total = op1 + op2; 
        total.toString();
        this.setState({displayNum: total});
        this.setState({aO: '', opOne: ''});
        break;
        case 'mult': 
        op1 = Number(op1);
        op2 = Number(op2);
        total = op1 * op2; 
        total.toString();
        this.setState({displayNum: total});
        this.setState({aO: '', opOne: ''});
        break;
    }
     
  }

  render(){
    return (
<div className="container">
    <CalculatorDisplay text={this.state.displayNum} active={this.state.aO} operandOne={this.state.opOne}/>
    <div className="row">
    <ActionButton buttonStyle="action clear" text='clear' onClick={this.clearDisplay} />
    <NumberButton text="÷" op="div" buttonStyle="red"  onClick={this.activeOperator}/>
    </div>
    
    <div className="row">
    <NumberButton text="7" onClick={this.aTDoC} />
    <NumberButton text="8" onClick={this.aTDoC}  />
    <NumberButton text="9" onClick={this.aTDoC} />
    <NumberButton text="x" op="mult" buttonStyle="red" onClick={this.activeOperator} />
    </div>
    <div className="row">
    <NumberButton text="4" onClick={this.aTDoC} />
    <NumberButton text="5" onClick={this.aTDoC} />
    <NumberButton text="6" onClick={this.aTDoC} />
    <NumberButton text="−" op="min" buttonStyle={this.state.opBtnStyle} onClick={this.activeOperator}/>
    </div>
    <div className="row">
    <NumberButton text="1" onClick={this.aTDoC}  />
    <NumberButton text="2" onClick={this.aTDoC} />
    <NumberButton text="3" onClick={this.aTDoC} />
    <NumberButton text="+" op="plus" buttonStyle="red" onClick={this.activeOperator}/>
    </div>
    <div className="row">
    <ActionButton buttonStyle="action" text='0' onClick={this.aTDoC} /* onClick={this.activeOperator} */ />
    <NumberButton text="=" name="equals" 
                  aO={this.state.aO} 
                  operand1={this.state.opOne} 
                  operand2={this.state.displayNum}
                  onClick={this.calculate} 
                  buttonStyle="red"/>
    </div>

    

    </div>
    );
  }
}


/* const App = () => {
  return (
    <div className="container">
    <CalculatorDisplay text="0"/>
    <div className="row">
    <ActionButton buttonStyle="action clear" text='clear' />
    <NumberButton text="÷"/>
    </div>
    
    <div className="row">
    <NumberButton text="7" />
    <NumberButton text="8" />
    <NumberButton text="9" />
    <NumberButton text="x" buttonStyle="red"/>
    </div>
    <div className="row">
    <NumberButton text="4" />
    <NumberButton text="5" />
    <NumberButton text="6" />
    <NumberButton text="−" buttonStyle="red"/>
    </div>
    <div className="row">
    <NumberButton text="1" />
    <NumberButton text="2" />
    <NumberButton text="3" />
    <NumberButton text="+" buttonStyle="red"/>
    </div>
    <div className="row">
    <ActionButton buttonStyle="action" text='zero' />
    <NumberButton text="="/>
    </div>

    

    </div>
  );
}; */

export default App;
