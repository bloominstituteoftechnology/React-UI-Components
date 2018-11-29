import React from 'react';

class Heart extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clicks:0
        }
    }


IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render () {
      return (
        <div className="heart">
            <img onClick={this.IncrementItem} className="footer-image" id="heartB" alt="bannerpic" src="./images/reactImages/heartImage.PNG"></img>
        </div>
      )
  }

}

export default Heart;