import React from 'react';
import './Card.css';
class CardContent extends React.Component {
  render() {
    return <h1>CardContent stuff</h1>;
  }
}

export default CardContent;
//export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> // stateless functional component ( no this.state object)