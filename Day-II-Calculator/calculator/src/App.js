import React from 'react';
import './App.css';
import MyButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
<Display className="display"/>
      <div className="container">
      <ActionButton className='clear btn' action='clear'/>
      <ActionButton className='action btn' action='/'/>
      <MyButton className= 'number btn' name='7'/>
      <MyButton className= 'number btn' name='8'/>
      <MyButton className= 'number btn' name='9'/>
      <ActionButton className='action btn' action='X'/>
      <MyButton className= 'number btn' name='4'/>
      <MyButton className= 'number btn' name='5'/>
      <MyButton className= 'number btn' name='6'/>
      <ActionButton className='action btn' action='-'/>
      <MyButton className= 'number btn' name='1'/>
      <MyButton className= 'number btn' name='2'/>
      <MyButton className= 'number btn' name='3'/>
      <ActionButton className='action btn' action='+'/>
      <MyButton className= 'clear btn' name='0'/>
      <ActionButton className='action btn' action='='/>



      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
    </div>
  );
};

export default App;
