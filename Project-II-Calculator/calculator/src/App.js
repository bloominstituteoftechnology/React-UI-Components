import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'

// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

// const clearButton = {
//   name: 'clear'
// }

const SevenButton = {
  name: '7'
}

const EightButton = {
  name: '8'
}

const NineButton = {
  name: '9'
}

const FourButton = {
  name: '4'
}

const FiveButton = {
  name: '5'
}

const SixButton = {
  name: '6'
}

const OneButton = {
  name: '1'
}

const TwoButton = {
  name: '2'
}

const ThreeButton = {
  name: '3'
}

const clearButton = {
  name:'clear'
}

const zeroButton ={
  name:'0'
}

const divideButton ={
  name:'÷'
}

const multiplyButton ={
  name:'x'
}

const subtractButton ={
  name:'-'
}

const addButton ={
  name:'+'
}
const sumButton ={
  name:'='
}


const App = () => {
  return(
    <div>
      <Display />
      <ActionButton className='clearButton'   text={clearButton}/>
      <div className="numbersArea">
        <NumberButton className='buttonStyle'  text={SevenButton}/>
        <NumberButton className='buttonStyle'  text={EightButton}/>
        <NumberButton className='buttonStyle'  text={NineButton}/>
        
        <NumberButton className='buttonStyle1'  text={FourButton}/>
        <NumberButton className='buttonStyle1'  text={FiveButton}/>
        <NumberButton className='buttonStyle1'  text={SixButton}/>
       
        
       <NumberButton className='buttonStyle2'  text={OneButton}/>
       <NumberButton className='buttonStyle2'  text={TwoButton}/> 
       <NumberButton className='buttonStyle2'  text={ThreeButton}/> 
      </div>
      <ActionButton className='zeroButton'     text={zeroButton}/>
      <div className="redButtons">
      <ActionButton className='redButton'   text={divideButton}/>
      <ActionButton className='redButton' text={multiplyButton}/>
      <ActionButton className='redButton' text={subtractButton}/>
      <ActionButton className='redButton'      text={addButton}/>
      <ActionButton className='redButton'      text={sumButton}/>
      </div>
    </div>
  )
}
export default App;
