import React from 'react';
import './Button.css';



export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> // stateless functional component ( no this.state object)
