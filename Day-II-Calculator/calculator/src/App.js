import React from 'react';
import './App.css';

function SmallButton(props) {
  return <button className={props.className}>{props.name}</button>
}

function LargeButton(props) {
  return <button className={props.className}>{props.name}</button>
}

const App = () => {
  return (
    <div className="calc-wrapper">
      <div className="display">0</div>
      <div className="buttons-wrapper">
        <LargeButton className="large-button" name="Clear"/>
        <SmallButton className="calculation-button" name='&#247;'/>
        <SmallButton className="small-button" name='7'/>
        <SmallButton className="small-button" name='8'/>
        <SmallButton className="small-button" name='9'/>
        <SmallButton className="calculation-button" name='&#215;'/>
        <SmallButton className="small-button" name='4'/>
        <SmallButton className="small-button" name='5'/>
        <SmallButton className="small-button" name='6'/>
        <SmallButton className="calculation-button" name='&#8722;'/>
        <SmallButton className="small-button" name='1'/>
        <SmallButton className="small-button" name='2'/>
        <SmallButton className="small-button" name='3'/>
        <SmallButton className="calculation-button" name='&#43;'/>
        <LargeButton className="large-button" name="0"/>
        <SmallButton className="calculation-button" name='&#61;'/>
      </div>
    </div>
  );
};

export default App;
