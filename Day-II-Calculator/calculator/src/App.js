import React, { Component }  from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }

    this.numClicked = this.numClicked.bind(this);
  }

  numClicked(result) {
    this.setState({result})
    console.log(result);
  }

  render() {
    const wideButton = {
      width: '339px', 
      color: 'black', 
      background: 'white'
    };

    const rows = [
      ['clear', '÷'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '=']
    ]

    return (
      <div className='calculator-container'>
        <CalculatorDisplay result={this.state.result}/>
        {
          rows.map((row, i) => {
            let length = row.length;
            return (
              <div className='calc-row'>
                {
                  row.map((button, i )=> {
                  return (i+1 === length)
                    ?<ActionButton text={button} click={this.numClicked}/>
                      :<NumberButton text={button} click={this.numClicked} style={length < 3? wideButton : {}}/>
                  })
                }
              </div>
            );
          })
        }
      </div>
    );

  }
};

export default App;
