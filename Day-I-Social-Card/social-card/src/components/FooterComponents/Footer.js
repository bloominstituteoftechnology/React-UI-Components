import React from 'react';
import './Footer.css';
class Footer extends React.Component {
  render() {
    return <h1>Footer stuff</h1>;
  }
}
export default Footer;
//export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> // stateless functional component ( no this.state object)