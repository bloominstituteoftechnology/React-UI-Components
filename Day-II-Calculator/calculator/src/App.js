import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonDisplay from './components/ButtonComponents/NumberButton'

const buttons = [
  {
    id: "clear",
    type:'reset',
    style:'white-long'
  },
  {
    id: "/",
    type:'operation',
    style:'red'
  },
  {
    id: "*",
    type:'operation',
    style:'red'
  },
  {
    id: "-",
    type:'operation',
    style:'red'
  },  
  {
    id: "+",
    type:'operation',
    style:'red'
  },  
  {
    id: "=",
    type:'operation',
    style:'red'
  },
  {
    id: "0",
    type:'number',
    style:'white-long'
  },
  {
    id: "1",
    type:'number',
    style:'white-short'
  },
  {
    id: "2",
    type:'number',
    style:'white-short'
  },
  {
    id: "3",
    type:'number',
    style:'white-short'
  },
  {
    id: "4",
    type:'number',
    style:'white-short'
  },
  {
    id: "5",
    type:'number',
    style:'white-short'
  },
  {
    id: "6",
    type:'number',
    style:'white-short'
  },
  {
    id: "7",
    type:'number',
    style:'white-short'
  },
  {
    id: "8",
    type:'number',
    style:'white-short'
  },
  {
    id: "9",
    type:'number',
    style:'white-short'
  },
]

let firstrow = buttons.filter(val => {
  return val.id === 'clear'  
});

firstrow.push(
  buttons.filter(val => {
    return val.id === '/'  
  })[0]
);

console.log(firstrow);

let secondrow = buttons.filter(val => {
  return val.id === '7'  
});

secondrow.push(
  buttons.filter(val => {
    return val.id === '8'  
  })[0]
);

secondrow.push(
  buttons.filter(val => {
    return val.id === '9'  
  })[0]
);

secondrow.push(
  buttons.filter(val => {
    return val.id === '*'  
  })[0]
);

let thirdrow = buttons.filter(val => {
  return val.id === '4'  
});

thirdrow.push(
  buttons.filter(val => {
    return val.id === '5'  
  })[0]
);

thirdrow.push(
  buttons.filter(val => {
    return val.id === '6'  
  })[0]
);

thirdrow.push(
  buttons.filter(val => {
    return val.id === '-'  
  })[0]
);

let fourthrow = buttons.filter(val => {
  return val.id === '1'  
});

fourthrow.push(
  buttons.filter(val => {
    return val.id === '2'  
  })[0]
);

fourthrow.push(
  buttons.filter(val => {
    return val.id === '3'  
  })[0]
);

fourthrow.push(
  buttons.filter(val => {
    return val.id === '+'  
  })[0]
);

let fifthrow = buttons.filter(val => {
  return val.id === '0'  
});

fifthrow.push(
  buttons.filter(val => {
    return val.id === '='  
  })[0]
);



console.log(secondrow);

function App () {
  return (
    <div>
      <div class="container-calculator">
        <CalculatorDisplay/>
        <div class = 'row'>
        {firstrow.map(buttonFromMap => {
          return (
            <ButtonDisplay buttononprops = {buttonFromMap}/>
          )
        })}
        </div>
        <div class = 'row'>
        {secondrow.map(buttonFromMap => {
          return (
            <ButtonDisplay buttononprops = {buttonFromMap}/>
          )
        })}
        </div>
        <div class = 'row'>
        {thirdrow.map(buttonFromMap => {
          return (
            <ButtonDisplay buttononprops = {buttonFromMap}/>
          )
        })}
        </div>
        <div class = 'row'>
        {fourthrow.map(buttonFromMap => {
          return (
            <ButtonDisplay buttononprops = {buttonFromMap}/>
          )
        })}
        </div>
        <div class = 'row'>
        {fifthrow.map(buttonFromMap => {
          return (
            <ButtonDisplay buttononprops = {buttonFromMap}/>
          )
        })}
        </div>
      </div>

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
  );
};



export default App;

//Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.
//Example your component should be able to render a dynamic prop called text:
// Your button button should also be able to accept dynamic props buttonStyle for styling
// <button className={props.buttonStyle}>{props.text}</button>
// Create an <ActionButton /> component that will be used for the zero character and the clear button.
// Create a <CalculatorDisplay /> component that will be used as the calculator display
