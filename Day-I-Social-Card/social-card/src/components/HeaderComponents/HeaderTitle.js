import React from 'react';
import './Header.css';
import moment from 'moment';
import Moment from 'react-moment';

const HeaderTitle = () =>{
  const date = moment().format( "MMM DD");
  return(
    <div>
      <h3>Lambda School<span>@LambdaSchool•<Moment>{date}</Moment> </span></h3>
    </div>
  );
}

export default HeaderTitle;