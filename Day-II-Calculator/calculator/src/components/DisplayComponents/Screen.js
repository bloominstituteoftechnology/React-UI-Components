import React from 'react'; // Import react module
import ScreenRow from './ScreenRow';
import './Display.css';

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}/>
      <ScreenRow value={props.answer}/>
    </div>
  );
}


export default Screen;