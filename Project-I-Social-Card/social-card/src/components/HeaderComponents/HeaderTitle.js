import React from 'react';
import './Header.css';
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getDate(){
  var d = new Date();
  var todaysDate = d.getDate() +" " + months[d.getMonth()];
  return todaysDate;
}

const HeaderTitle = () => {
  return(
    <div className = "header-title">
      <h3>Lambda School</h3>
      <span>{getDate()}</span>
    </div>
  );


};

export default HeaderTitle;
