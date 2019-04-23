import React from 'react';
import './App.scss';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {

  state ={
    total: 0,
  }

  render(){

const symbols = ['clear','0','1','2','3','4','5','6','7','8','9','+','-','*','%',"="]
  return (

    <div className="border container">
     
      <Display />
      <ButtonsContainer  zero={this.state.total} symbols={symbols} />
      
    </div>
  );
};
}
export default App;
