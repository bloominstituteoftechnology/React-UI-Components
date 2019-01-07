import React from 'react';

import './Header.css';

import Moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="card__header__text__heading">
      <h2 className="card__header__text__heading__profile-name">Lambda School</h2> 
      <span className="card__header__text__heading__info">@LambdaSchool</span> 
      <span className="card__header__text__heading__info">•</span> 
      <span className="card__header__text__heading__info">{Moment().format("D MMM").toLowerCase()}</span>
    </div>
  );
};

export default HeaderTitle;