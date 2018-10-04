import React from 'react';
import './Card.css';
class CardBanner extends React.Component {
  render() {
    return (
    <div className="container-banner">
      <h1>CardBanner stuff</h1>
      <img className="banner-img" src="https://ibin.co/3wnC6SgIOJud.png"  alt="LambdaShield" height="20" width="20" />
    </div>
    )
  }
  }

export default CardBanner
//export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> 
// stateless functional component ( no this.state object)