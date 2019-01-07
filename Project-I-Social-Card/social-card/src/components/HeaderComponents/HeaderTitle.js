import React from 'react';

import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="card__header__text__heading">
      <h2 className="card__header__text__heading__profile-name">Lambda School</h2> <span className="card__header__text__heading__info">@LambdaSchool</span> <span className="card__header__text__heading__info">•</span><span className="card__header__text__heading__info">26 jan</span>
    </div>
  );
};

export default HeaderTitle;