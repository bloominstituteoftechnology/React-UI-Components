import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className = 'app-wrapper'>
      <Display text='0' />
      <ActionButton text='clear' customStyleProp='clear' />
      <ActionButton text='&#247;' customStyleProp='actions' />
      <NumberButton text = '7'/>
      <NumberButton text='8' />
      <NumberButton text='9' />
      <ActionButton text='&#215;' customStyleProp='actions' />
      <NumberButton text='4' />
      <NumberButton text='5' />
      <NumberButton text='6' />
      <ActionButton text='&#8722;' customStyleProp='actions' />
      <NumberButton text='1' />
      <NumberButton text='2' />
      <NumberButton text='3' />
      <ActionButton text='&#43;' customStyleProp ='actions' />
      <ActionButton text='&#61;' customStyleProp ='actions' />
      <NumberButton text='0' customStyleProp = 'zero' />
    </div>
  );
};

export default App;


// -For this project you 're not going to be given any tips on how to break down the image file into components. Now that you'
// ve had some practice with the social card, this should be something you can start doing on your own.Just think about the image, and what potentially looks like a component. -
//   For the MVP the calculator just needs to be displayed properly.Functionality will be a part of the stretch requirement. -
//   All the files you 'll need for this project are found in `Day-II-Calculator/calculator/src/components`. You can find all the component files you should need in their respective directory. i.e. inside of the `ButtonComponents` directory you should see a couple `.js` files and a `.css` file. -
//   Feel free to add any files
// for any extra components you may feel the need to build. -
//   Here is what your calculator should look like:

//   ![Calculator](calculator - component.png)

//   -
//   ** BEFORE YOU DO ANYTHING ELSE READ[This](https: //reactjs.org/docs/thinking-in-react.html)**
//     -This is the time to stop and
//     break down this image in terms of components.Each container on the screen should give you an idea of what your components should be.You 're now about to begin your journey into learning how to think in React.

//     ####
//     Day 2 MVP requirements

//     -
//     Create a `<NumberButton />`
//     component that can accept `props`
//     and display any number / symbol passed down as `text`. -
//     Example your component should be able to render a dynamic prop called text:
//     -Your button button should also be able to accept dynamic props `buttonStyle`
//     for styling

//     ``
//     `js
// <button className={props.buttonStyle}>{props.text}</button>
// `
//     ``

//     -
//     Create an `<ActionButton />`
//     component that will be used
//     for the `zero`
//     character and the `clear`
//     button. -
//     Create a `<CalculatorDisplay />`
//     component that will be used as the `calculator display`

//     ####
//     Day 2 Stretch Problems

//     -
//     Re - factor your `App.js`
//     file to be a classical component that can hold state on it 's constructor. (There is some documentation in training kit on how this works). -
//     On your state object be sure to include a property
//     for the `total`
//     that can be passed down to your `<CalculatorDisplay />`
//     component. -
//     Create some `handler functions`
//     that can take in some information from an, `onClick`
//     and use that information to update the `total`
//     on the App state.

//     -
//     `this.setState`
//     will be your best friend here: )

//   **
//   GOOD LUCK! **