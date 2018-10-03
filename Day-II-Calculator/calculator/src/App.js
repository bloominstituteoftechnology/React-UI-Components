import React from 'react';
import './App.css';

import ActionBtn from  './components/ButtonComponents/ActionButton.js';
import NumberBtn from  './components/ButtonComponents/NumberButton.js';
import ZeroNumberBtn from  './components/ButtonComponents/ZeroNumberButton.js';
import ClearBtn from  './components/ButtonComponents/ClearButton.js';
import Display from  './components/DisplayComponents/CalculatorDisplay.js';

const calcArray = ['÷', '×', '−', '+', '='];

function numGen() {
  const numArr = [];
  for (let i = 9; i >= 0; i--) {
    numArr.push(i.toString());
  };
  return numArr;
}

const App = () => {
  return (
    <div>
      <div class="first-row">
        <Display />
      </div>
      <div class="second-row">
        <ClearBtn className="clearBtn" clear="clear"/>
        <ActionBtn className="actionBtn" action={calcArray[0]}/>
      </div>
      <div class="third-row">
        <NumberBtn className='smallNumBtn' number={numGen()[0]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[1]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[2]}/>
        <ActionBtn className="actionBtn" action={calcArray[1]}/>
      </div>
      <div class="fourth-row">
        <NumberBtn className='smallNumBtn' number={numGen()[3]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[4]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[5]}/>
        <ActionBtn className="actionBtn" action={calcArray[2]}/>
      </div>
      <div class="fifth-row">
        <NumberBtn className='smallNumBtn' number={numGen()[6]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[7]}/>
        <NumberBtn className='smallNumBtn' number={numGen()[8]}/>
        <ActionBtn className="actionBtn" action={calcArray[3]}/>
      </div>
      <div class="sixth-row">
        <ZeroNumberBtn className='smallNumBtn' number={numGen()[9]}/>
        <ActionBtn className="actionBtn" action={calcArray[4]}/>
      </div>
    </div>
  );
};

export default App;
