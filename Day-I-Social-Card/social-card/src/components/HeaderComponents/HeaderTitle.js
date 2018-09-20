import React, {Component} from 'react';
import './Header.css';
import moment from 'moment';


class HeaderTitle extends Component {
  render() {
    const formattedDT = moment().format("Do MMM");
    return (<div className="ContentTitle">
      <h1>Lambda School</h1>
      <h2>@LambdaSchool • {formattedDT}</h2>
    </div>);
  }
}

export default HeaderTitle;
