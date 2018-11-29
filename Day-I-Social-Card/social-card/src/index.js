import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
document.querySelector(".card").addEventListener("click", e => {
  window.location.href = "https://www.reactjs.org";
});
