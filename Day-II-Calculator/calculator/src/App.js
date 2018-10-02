import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { total: 0,
                   displayNum: [0]
    };
    this.aTDoC = this.aTDoC.bind(this);

  }
  /* add to display on click */
  aTDoC(number){
    let numberArr = []
    if(this.state.displayNum[0] === 0){
    numberArr.push(number) 
    this.setState({displayNum: numberArr})
    }
    else{
      numberArr.push(number)
      this.setState({displayNum: numberArr})
    }
  }

  render(){
    return (
<div className="container">
    <CalculatorDisplay text={this.state.displayNum}/>
    <div className="row">
    <ActionButton buttonStyle="action clear" text='clear' />
    <NumberButton text="÷"/>
    </div>
    
    <div className="row">
    <NumberButton text="7" onClick={this.aTDoC} />
    <NumberButton text="8" onClick={this.aTDoC}  />
    <NumberButton text="9" onClick={this.aTDoC} />
    <NumberButton text="x" buttonStyle="red" onClick={this.aTDoC} />
    </div>
    <div className="row">
    <NumberButton text="4" onClick={this.aTDoC} />
    <NumberButton text="5" onClick={this.aTDoC} />
    <NumberButton text="6" onClick={this.aTDoC} />
    <NumberButton text="−" buttonStyle="red"/>
    </div>
    <div className="row">
    <NumberButton text="1" onClick={this.aTDoC}  />
    <NumberButton text="2" onClick={this.aTDoC} />
    <NumberButton text="3" onClick={this.aTDoC} />
    <NumberButton text="+" buttonStyle="red"/>
    </div>
    <div className="row">
    <ActionButton buttonStyle="action" text='zero' />
    <NumberButton text="="/>
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
