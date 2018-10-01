import React from 'react';
import './Header.css';
import thumbnail from "./logo.png";
import HeaderContent from "./HeaderContent";
import moment from 'moment';

const ThumbNail = (props) => (
  <img src={thumbnail} alt="LambdaSchool Logo" />
);

const DateStamp = (props) => {
  return (
    <span className="postDate">@LambdaSchool • {moment().calendar()}</span>
  )
}

const UserMessage = (props) => (
  <div className="userPost">
    <h4>Lambda School</h4>
    <DateStamp />
    <HeaderContent />
  </div >
)


const HeaderTitle = (props) => {
  return (
    <div className="headerBanner">
      <ThumbNail />
      <UserMessage />
    </div>
  )

}
export default HeaderTitle;