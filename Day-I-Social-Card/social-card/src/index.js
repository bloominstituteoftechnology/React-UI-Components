import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// const messageBtn = document.querySelector(".messageBtn");
// const messageBtnAfter = document.querySelector(".messageBtnAfter");
// const shareBtn = document.querySelector(".shareBtn");
// const shareBtnAfter = document.querySelector(".shareBtnAfter");
// const likeBtn = document.querySelector(".likeBtn");
// const likeBtnAfter = document.querySelector(".likeBtnAfter");
// const emailBtn = document.querySelector(".emailBtn");
// const emailBtnAfter = document.querySelector(".emailBtnAfter");

// messageBtn.addEventListener("click", function() {
//   messageBtnAfter.innerHTML = "1";
// });

let icon = document.querySelectorAll(".icon");
let spanEl = document.querySelectorAll(".icon span");
spanEl = span.map(function() {
  return span;
});
console.log(span);

icon.forEach(icon => icon.addEventListener("click", increase));

function increase(e) {}
