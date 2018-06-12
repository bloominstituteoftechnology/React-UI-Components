import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display.js';


const buttons =
    [
        ["clear"],
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3]
    ];

let operators = {
    operators: ["÷", "×", "−", "+", "="]
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operator: null,
      newNum: 0
    };
  }
  render() {
    let totalArray = [[ this.state.total ]];
    let fullButtons = buttons.concat(totalArray);
    return (<Display buttons={fullButtons} operators={operators} />);
  }

}

export default App;
