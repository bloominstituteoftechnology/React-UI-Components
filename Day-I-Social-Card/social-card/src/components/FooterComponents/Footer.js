import React from "react";
import "./Footer.css";

// started to make a dynamic button here so when you click the image icons, the numbers beside them will increment
// const DynamicButton = props => {

// }

const Footer = () => {
  return (
    <footer>
      <div>
        <i className="far fa-comment" />
      </div>
      <div>
        <i className="fas fa-sync update" />
        <p>6</p>
      </div>
      <div>
        <i className="far fa-heart update" />
        <p>4</p>
      </div>
      <div>
        <i className="far fa-envelope" />
      </div>
    </footer>
  );
};

export default Footer;
