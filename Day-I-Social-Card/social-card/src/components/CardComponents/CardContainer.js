import React from 'react';
import './Card.css';
class CardContainer extends React.Component {
  render() {
    return <h1>CardContainer stuff</h1>;
  }
}
export default CardContainer;
// export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> // stateless functional component ( no this.state object)