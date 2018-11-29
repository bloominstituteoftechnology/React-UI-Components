import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
let re = 6;
let num = 4;
ReactDOM.render(<App re={re} num={num} />, document.getElementById("root"));
document.querySelector(".card").addEventListener("click", e => {
  window.location.href = "https://www.reactjs.org";
});
document.querySelector(".fa-retweet").addEventListener("click", e => {
  re += 1;
  document.querySelector(".retweet").textContent = re;
});
document.querySelector(".fa-heart").addEventListener("click", e => {
  num += 1;
  document.querySelector(".num").textContent = num;
});
