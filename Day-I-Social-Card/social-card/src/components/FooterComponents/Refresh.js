import React from 'react';

class Refresh extends React.Component {
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
        <div className="refresh">
            <img onClick={this.IncrementItem} className="footer-image" id="refreshB" alt="bannerpic" src="./images/reactImages/refreshImage.PNG"></img>
        </div>
      )
  }

}

export default Refresh;