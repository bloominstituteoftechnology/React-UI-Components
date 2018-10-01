import React from 'react';
import './Header.css';
import thumbnail from "./logo.png";
import HeaderContent from "./HeaderContent";

const ThumbNail = (props) => (
  <img src={thumbnail} alt="LambdaSchool Logo" />
);

const UserMessage = (props) => (
  <div className="userPost">
    <h4>Lambda School</h4>
    <span className="postDate">@LambdaSchool - 26 Jan</span>
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