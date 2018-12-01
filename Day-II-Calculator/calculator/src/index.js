import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

let store;
let funcPressed = 0;
let action = "";
let last;
let eq = 0;
document.querySelectorAll(".num").forEach(e => {
  e.addEventListener("click", e => {
    if (funcPressed === 0) {
      if (document.querySelector(".display").innerText !== "0") {
        document.querySelector(".display").textContent =
          document.querySelector(".display").innerText + e.path[0].innerText;
      } else {
        document.querySelector(".display").textContent = e.path[0].innerText;
      }
    } else {
      document.querySelector(".display").textContent = e.path[0].innerText;
      funcPressed = 0;
      last = document.querySelector(".display").textContent;
      console.log(last);
    }
  });
});
document.querySelector(".clear").addEventListener("click", e => {
  document.querySelector(".display").textContent = "0";
  action = "";
  eq = 0;
  funcPressed = 0;
  store = 0;
  last = 0;
});
document.querySelector(".divide").addEventListener("click", e => {
  store = Number(document.querySelector(".display").textContent);
  funcPressed = 1;
  action = "divide";
  eq = 0;
});
document.querySelector(".times").addEventListener("click", e => {
  store = Number(document.querySelector(".display").textContent);
  funcPressed = 1;
  action = "times";
  eq = 0;
});
document.querySelector(".minus").addEventListener("click", e => {
  store = Number(document.querySelector(".display").textContent);
  funcPressed = 1;
  action = "minus";
  eq = 0;
});
document.querySelector(".plus").addEventListener("click", e => {
  store = Number(document.querySelector(".display").textContent);
  funcPressed = 1;
  action = "plus";
  eq = 0;
});
document.querySelector(".equals").addEventListener("click", e => {
  equalsFunc();
});
const equalsFunc = _ => {
  if (store) {
    if (action === "plus") {
      if (eq === 1) {
        document.querySelector(".display").textContent =
          Number(document.querySelector(".display").textContent) + Number(last);
      } else {
        document.querySelector(".display").textContent =
          Number(document.querySelector(".display").textContent) +
          Number(store);
      }
      eq = 1;
    }
    if (action === "minus") {
      if (eq === 1) {
        document.querySelector(".display").textContent =
          Number(document.querySelector(".display").textContent) - Number(last);
      } else {
        document.querySelector(".display").textContent =
          Number(store) -
          Number(document.querySelector(".display").textContent);
      }
      eq = 1;
    }
    if (action === "times") {
      if (eq === 1) {
        document.querySelector(".display").textContent =
          Number(last) * Number(document.querySelector(".display").textContent);
      } else {
        document.querySelector(".display").textContent =
          Number(document.querySelector(".display").textContent) *
          Number(store);
      }
      eq = 1;
    }
    if (action === "divide") {
      if (eq === 1) {
        document.querySelector(".display").textContent =
          Number(document.querySelector(".display").textContent) / Number(last);
      } else {
        document.querySelector(".display").textContent =
          Number(store) /
          Number(document.querySelector(".display").textContent);
      }
      eq = 1;
    }
  }
};
