import React from "react";
import "./Footer.css";

class ChatClick extends React.Component {
    chatClick() {
        alert("Chat Handler");
    }

    render() {
        return (
          <i className="material-icons" onClick={(e) => this.chatClick(e)}>chat_bubble_outline</i>
        );
      }
}

export default ChatClick;