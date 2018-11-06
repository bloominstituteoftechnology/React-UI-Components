import React from 'react';
import moment from 'moment';
import './Header.css';

class HeaderTitle extends React.Component {
  constructor() {
    super();

    this.formats = ['DD MMM', 'dddd', 'YYYY', 'hh:mm:ss', ''];

    this.state = {
      formatIndex: 0
    };
  }

  handleClick() {
    this.setState({
      formatIndex: (this.state.formatIndex + 1) % this.formats.length
    });
  }

  render() {
    return (
      <div className="header__title-container mb-2">
        <span className="header__title">Lambda School</span>
        <span className="header__handle">@LambdaSchool</span>
        <span
          style={{ cursor: 'pointer' }}
          className="header__timestamp"
          onClick={() => this.handleClick()}
        >
          {moment().format(this.formats[this.state.formatIndex])}
        </span>
      </div>
    );
  }
}

export default HeaderTitle;
