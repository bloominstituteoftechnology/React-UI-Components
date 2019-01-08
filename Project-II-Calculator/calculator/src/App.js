import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

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



const App = () => {
  return(
    <div>
      <Display />

      <div className="numbersArea">
      <NumberButton className='buttonStyle'  text={SevenButton}/>
      <NumberButton className='buttonStyle'  text={EightButton}/>
      <NumberButton className='buttonStyle'  text={NineButton}/>
      <NumberButton className='buttonStyle'  text={FourButton}/>
      <NumberButton className='buttonStyle'  text={FiveButton}/>
      <NumberButton className='buttonStyle'  text={SixButton}/>
      <NumberButton className='buttonStyle'  text={OneButton}/>
      <NumberButton className='buttonStyle'  text={TwoButton}/> 
      <NumberButton className='buttonStyle'  text={ThreeButton}/> 
      </div>
      

    </div>
  )
}
export default App;
