import React from "react";
import "./Footer.css";

class MailClick extends React.Component {
    mailClick() {
        alert("email Handler");
    }

    render() {
        return (
          <i className="material-icons" onClick={(e) => this.mailClick(e)}>mail_outline</i>
        );
      }
}

export default MailClick;