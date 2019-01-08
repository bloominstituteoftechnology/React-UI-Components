import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const calcNumbers = [
  { symbol: "clear", id: "clear" },
  { symbol: 7, id: 7 },
  { symbol: 8, id: 8 },
  { symbol: 9, id: 9 },
  { symbol: 4, id: 4 },
  { symbol: 5, id: 5 },
  { symbol: 6, id: 6 },
  { symbol: 1, id: 1 },
  { symbol: 2, id: 2 },
  { symbol: 3, id: 3 },
  { symbol: 0, id: 0 }
];

const symbols = [
  { symbol: <i class="fas fa-divide" />, id: "divide" },
  { symbol: <i class="fas fa-times" />, id: "multiply" },
  { symbol: <i class="fas fa-minus" />, id: "minus" },
  { symbol: <i class="fas fa-plus" />, id: "plus" },
  { symbol: <i class="fas fa-equals" />, id: "equals" }
];

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay text="Calc Display"  />
      <div className="button-container">
        <div className="main-buttons">
          {calcNumbers.map(button => {
            if (button.id === "clear") {
              return <ActionButton key={button.id} text={button.symbol} />;
            }
            if (button.id === 0) {
              return <ActionButton key={button.id} text={button.symbol} />;
            }

            return <NumberButton key={button.id} text={button.symbol} />;
          })}
        </div>
        <div className="button-symbol-container">
          {symbols.map(button => {
            return (
              <NumberButton key={button.symbol.key} text={button.symbol} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
