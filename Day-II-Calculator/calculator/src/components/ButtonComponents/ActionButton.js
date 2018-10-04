import React from 'react';
import './Button.css';

export default (props) => <div className="btn-borders  ActionButton" >{props.children}</div> // stateless functional component

/*
export default (props) => <div className={`NumberButton ${props.btnWidth}`}>{props.children}</div> // stateless functional component ( no this.state object)
*/
