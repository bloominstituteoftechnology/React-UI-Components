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


        {/* <div className='calc-row'>
          <ActionButton text={'clear'} style={wideButton} click={this.numClicked}/>
          <ActionButton text={'÷'} click={this.numClicked}/>
        </div>
        <div className='calc-row'>
          <NumberButton text={7} click={this.numClicked}/>
          <NumberButton text={8} click={this.numClicked}/>
          <NumberButton text={9} click={this.numClicked}/>
          <ActionButton text={'X'} click={this.numClicked}/>
        </div>
        <div className='calc-row'>
          <NumberButton text={4} click={this.numClicked}/>
          <NumberButton text={5} click={this.numClicked}/>
          <NumberButton text={6} click={this.numClicked}/>
          <ActionButton text={'-'} click={this.numClicked}/>
        </div>
        <div className='calc-row'>
          <NumberButton text={1} click={this.numClicked}/>
          <NumberButton text={2} click={this.numClicked}/>
          <NumberButton text={3} click={this.numClicked}/>
          <ActionButton text={'+'} click={this.numClicked}/>
        </div>
        <div className='calc-row'>
          <ActionButton text={0} style={wideButton} click={this.numClicked}/>
          <ActionButton text={'='} click={this.numClicked}/>
        </div> */}
      </div>
    );

  }
};

export default App;
