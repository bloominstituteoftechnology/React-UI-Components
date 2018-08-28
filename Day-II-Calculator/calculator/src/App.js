import React from 'react';
import './App.css';
import './index.css';
import NumberBrn from './components/ButtonComponents/NumberButton'; 
import ActionBtn from './components/ButtonComponents/ActionButton'; 
import CalDisplay from './components/DisplayComponents/CalculatorDisplay';


// const harryProfile = {
//   name: "Harry Potter",
//   identity: "The Chosen One",
//   age: 11,
//   bestFriend: "Ron Weasley and Hermione Granger"
// };

const numbers = {
  clear: 'clear',
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

const symbols = {
  divide: '÷',
  times: 'X',
  minus: '–',
  add: '+',
  equals: '=',
}
// <h1>Name: {props.student.name}</h1>
// <HogwartsStudent student={hermioneProfile} house="gryffindor"/>
const App = () => {
  return (
    <div>
      <CalDisplay nums={numbers} />
      <div className="flexapp">
        <div><NumberBrn nums={numbers} /></div>
        <div><ActionBtn syb={symbols}/></div>
      </div>
    </div>
  );
};

export default App;
