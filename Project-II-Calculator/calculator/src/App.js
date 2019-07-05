import React from 'react';
import './App.css';
import {NumberButton} from './components/ButtonComponents/NumberButton'
import {ActionButton} from './components/ButtonComponents/ActionButton'
import {LargeButton} from './components/ButtonComponents/LargeButton'
import {CalculatorDisplay} from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div>
     <div className="btnContainer">
          <CalculatorDisplay />
      </div>
       <div className="btnContainer">
            <LargeButton text = {"clear"}/>
            <div className="symContainer">
                <ActionButton />
            </div>
        </div>
        <div className="btnContainer">
            <NumberButton text = {7}/>
            <NumberButton text = {8}/>
            <NumberButton text = {9}/>
            <div className="symContainer">
                <ActionButton symbol = {"x"}/>
            </div>
        </div>
        <div className="btnContainer">
            <NumberButton text = {4}/>
            <NumberButton text = {5}/>
            <NumberButton text = {6}/>
            <div className="symContainer">
                <ActionButton symbol = {"-"}/>
            </div>
        </div>
        <div className="btnContainer">
            <NumberButton text = {1}/>
            <NumberButton text = {2}/>
            <NumberButton text = {3}/>
            <div className="symContainer">
                <ActionButton symbol = {"+"}/>
            </div>
        </div>
        <div className="btnContainer">
            <LargeButton text = {"0"}/>
            <div className="symContainer">
                <ActionButton symbol = {"="}/>
            </div>
        </div>
    </div>
      
  );
};

export default App;
