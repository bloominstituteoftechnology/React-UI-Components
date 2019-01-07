import React from "react";

const Footer = props => {
  return <div>
  {props.symbols.comment}
  {props.symbols.sync}
  {props.symbols.like}
  {props.symbols.mail}
  </div>;
}

export default Footer;