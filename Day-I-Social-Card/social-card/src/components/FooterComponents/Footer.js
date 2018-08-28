import React from "react";
import "./Footer.css";

// class Footer {
//   constructor(footerAttributes) {
//       this.name = personAttributes.name;
//       this.age = personAttributes.age;
//       this.location = personAttributes.location;
//       this.gender = personAttributes.gender;
//   }
//   speak () {
//       return `Hello my name is ${this.name}, I am from ${this.location}`;
//   }
// }// End of Parent



const Footer = () => {
  return (
    <div className="footer-wrapper">
      <i className="fa fa-comment-o" />
      <i className="fa fa-refresh" />
      {/* <span>{refreshCounterTot}</span> */}
      <i className="fa fa-heart-o" />
      <i className="fa fa-envelope-o" />
    </div>
  );
};



export default Footer;