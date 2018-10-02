import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  let d = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  d = `${d.getDate()} ${months[d.getMonth()]}`
  return (
    <div className="header-text">
      <h2>Lambda School</h2><p> @LambdaSchool • {d}</p>
    </div>
  );
};

export default HeaderTitle;
