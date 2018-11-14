import React from 'react';
import './Button.css';


export const NumberButton=()=>{
  return(
      <div className='numbersContainer'>
        <button className='clear wide' name='clear' onClick={e => this.props.onClick(e.target.name)}>clear</button>
        <div className='oneThruNine'>
          <div className='sevenThruNine'>
            <button className='seven' onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button className='eight' onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button className='nine' onClick={e => this.props.onClick(e.target.name)}>9</button>
          </div>
          <div className='fourThruSix'>
            <button className='four' onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button className='five' onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button className='six' onClick={e => this.props.onClick(e.target.name)}>6</button>
          </div>
          <div className='oneThruThree'>
            <button className='one' onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button className='two' onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button className='three' onClick={e => this.props.onClick(e.target.name)}>3</button>
          </div>
          <button className='zero wide' onClick={e => this.props.onClick(e.target.name)}>0</button>
        </div>
      </div>
    )
  };

  export const ActionButton=()=>{
    return(
      <div className='actionContainer'>
        <button className='divide' onClick={e => this.props.onClick(e.target.name)}>÷</button>
        <button className='multiply' onClick={e => this.props.onClick(e.target.name)}>×</button>
        <button className='subtract' onClick={e => this.props.onClick(e.target.name)}>−</button>
        <button className='addition' onClick={e => this.props.onClick(e.target.name)}>+</button>
        <button className='equal' onClick={e => this.props.onClick(e.target.name)}>=</button>
      </div>
  )
};
