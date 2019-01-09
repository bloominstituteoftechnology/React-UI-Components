import React, { Component } from "react";
import "./Button.css";

export const NumBtn = props => {
  return <button className={props.buttonStyle}>{props.text}</button>;
};
