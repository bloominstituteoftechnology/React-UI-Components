import React from 'react';
import './Footer.css';


class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(({count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <div className="icons heart">
        <img className="iconImage" src="./../heart.png" alt="heart" />
        <button onClick = {this.handleClick}> {this.state.count} </button>
      </div>
    )
  }
}


export default Heart;
