import React from "react";
import "./App.css";

import { CalcDisp } from "./components/DisplayComponents/CalculatorDisplay";
import { NumBtn } from "./components/ButtonComponents/NumberButton";
import { ActBtn } from "./components/ButtonComponents/ActionButton";

export class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }
}
