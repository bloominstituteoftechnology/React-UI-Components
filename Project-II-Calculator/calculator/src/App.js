import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const buttons = [
  {
      id: '0',
      name: '0',
      style: 'triple',
      type: 'number'
  },
  {
      id: '1',
      name: '1',
      style: 'single',
      type: 'number'
  },
  {
      id: '2',
      name: '2',
      style: 'single',
      type: 'number'
  },
  {
      id: '3',
      name: '3',
      style: 'single',
      type: 'number'
  },
  {
      id: '4',
      name: '4',
      style: 'single',
      type: 'number'
  },
  {
      id: '5',
      name: '5',
      style: 'single',
      type: 'number'
  },
  {
      id: '6',
      name: '6',
      style: 'single',
      type: 'number'
  },
  {
      id: '7',
      name: '7',
      style: 'single',
      type: 'number'
  },
  {
      id: '8',
      name: '8',
      style: 'single',
      type: 'number'
  },
  {
      id: '9',
      name: '9',
      style: 'single',
      type: 'number'
  },
  {
      id: '10',
      name: 'clear',
      style: 'triple',
      type: 'number'
  },
  {
      id: '1',
      name: '÷',
      style: 'action',
      type: 'action'
  },
  {
      id: '2',
      name: 'x',
      style: 'action',
      type: 'action'
  },
  {
      id: '3',
      name: '-',
      style: 'action',
      type: 'action'
  },
  {
      id: '4',
      name: '+',
      style: 'action',
      type: 'action'
  },
  {
      id: '5',
      name: '=',
      style: 'action',
      type: 'action'
  }
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      first: '',
      second: '',
      operator: ''
    }
  }
 
  handleClear = () => {
    this.setState({total: 0})
  }

  render(){
    return(
      <div className='App'>
        <Display total = {this.state.total}/>
        <ButtonContainer 
            handleClear = {this.handleClear}
            state = {this.state}
            buttons = {buttons}
          />
      </div>

    )
  }
}

// const App = () => {
//   return (
//     <div className='App'>
//       <Display />
//       <ButtonContainer />
//     </div>
//   );
// };

export default App;
