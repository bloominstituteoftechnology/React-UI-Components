import React from 'react';
import './App.css';
import CalcRow from './components/CalcRow/CalcRow';
import DisplayRow from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  const total = 0;
  const row5 = [{symbol:'clear',type:'num',color:'white',size:'cell75'},{symbol:'%',type:'act',color:'red',size:'cell25'}]
  const row4 = [{symbol:'7',type:'num',color:'white',size:'cell25'},{symbol:'8',type:'num',color:'white',size:'cell25'},{symbol:'9',type:'num',color:'white',size:'cell25'},{symbol:'X',type:'act',color:'red',size:'cell25'}]
  const row3 = [{symbol:'4',type:'num',color:'white',size:'cell25'},{symbol:'5',type:'num',color:'white',size:'cell25'},{symbol:'6',type:'num',color:'white',size:'cell25'},{symbol:'-',type:'act',color:'red',size:'cell25'}]
  const row2 = [{symbol:'1',type:'num',color:'white',size:'cell25'},{symbol:'2',type:'num',color:'white',size:'cell25'},{symbol:'3',type:'num',color:'white',size:'cell25'},{symbol:'+',type:'act',color:'red',size:'cell25'}]
  const row1 = [{symbol:'0',type:'num',color:'white',size:'cell75'},{symbol:'=',type:'act',color:'red',size:'cell25'}]

  return (
    <div className='app-container'>
      <DisplayRow data = {total}/>
      <CalcRow data={row5}/>
      <CalcRow data={row4}/>
      <CalcRow data={row3}/>
      <CalcRow data={row2}/>
      <CalcRow data={row1}/>
    </div>
  );
};

export default App;
