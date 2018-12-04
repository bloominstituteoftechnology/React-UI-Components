import React from 'react';
import './Footer.css';


class Repost extends React.Component {
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
      <div className="icons repost">
        <img onClick = {this.handleClick} className = "iconImage" src="./../reload.png" alt="heart" />
        <div>
          <button onClick= {this.handleClick}> {this.state.count} </button>
        </div>
      </div>
    )
  }
}


export default Repost;
