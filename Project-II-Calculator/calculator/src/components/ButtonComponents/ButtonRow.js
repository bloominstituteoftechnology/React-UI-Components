import React from 'react';
import './Button.css';
import CalcButton from './CalcButton';

const ButtonRow = props => {
  if(props.doBorder) {
    return(
      <div className={props.className}>
        {props.range.map(num => num === props.range[1] ? <CalcButton btnBorder={true} innerBTN={num} key={num} /> : <CalcButton btnBorder={false} innerBTN={num} addClass={props.addClass} key={num} />)}
      </div>
    )
  } else {
    return(
      props.range.map( item => <CalcButton btnBorder={false} innerBTN={item} addClass={props.addClass} key={item} />)
    )
  }
}

export default ButtonRow;