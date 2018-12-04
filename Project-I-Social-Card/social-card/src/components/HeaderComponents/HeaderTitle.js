import React from 'react';
import Moment from 'react-moment';


const HeaderTitle = (props) => {
  const dateToFormat = new Date();
  return (
    <div>
      <h2 className="headerTitle"> Lambda School </h2>
      <p className = "headerPTag">@LambdaSchool &#183; <Moment format="DD MMM">{dateToFormat}</Moment></p>
    </div>
  )
}

export default HeaderTitle;
