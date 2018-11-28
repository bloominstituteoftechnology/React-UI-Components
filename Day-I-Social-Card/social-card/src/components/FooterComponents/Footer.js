import React from "react";
import "./Footer.css";

const FooterContent = props => {
    return (
        <div className="footer-container">
        <i className="material-icons chat-bubble">chat_bubble_outline</i>
            <i className="material-icons retweet">autorenew</i>
            <i className="material-icons like">favorite_border</i>
            <i className="material-icons mail">mail_outline</i>
        </div>
    );
}

const chatBubble = document.querySelector('.chat-bubble');
const reTweet = document.querySelector('.retweet');
const Like = document.querySelector('.like');
const Mail = document.querySelector('.mail');

<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

chatBubble.addEventListener('click', {
    openForm();
});

export default FooterContent;