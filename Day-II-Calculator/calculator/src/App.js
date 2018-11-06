import React, {Component} from 'react';
import './less/App.less';

import DisplayScreen from './components/DisplayComponents/Display';
import ActionButtons from './components/ButtonComponents/Action';
import NumberButtons from './components/ButtonComponents/Numbers';
import ClearButton from './components/ButtonComponents/Clear';
import ZeroButton from './components/ButtonComponents/Zero';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['\u00F7', '\u00D7', '\u2212', '\u002B', '\u003D'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      clear: 'clear',
      zero: '0'
    };
  }
  display = (value) => {
    this.setState({ input: this.state.input + value });
  };
  reset = () => this.setState({input: '' })

  render() {
    return <React.Fragment>
        <main>
          <DisplayScreen input={this.state.input} />
          <section className="buttons">
            <div className="left">
            <ClearButton clear={this.state.clear} reset={this.reset} />
              {numbers.map(button => <NumberButtons button={button} handleClick={this.display} />)}
            <ZeroButton zero={this.state.zero}/>
            </div>
            <div className="right">
              {operators.map(button => <ActionButtons button={button} />)}
            </div>
          </section>
        </main>
      </React.Fragment>;
  }   
}

export default App;
