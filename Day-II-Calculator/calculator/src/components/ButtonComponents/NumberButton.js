import React from "react";
import "./Button.css";

const NumberButton = () => {
  return (
    <div className="num-btn">
      <button className="grid-item">7</button>
      <button className="grid-item">8</button>
      <button className="grid-item">9</button>

      <button className="grid-item">4</button>
      <button className="grid-item">5</button>
      <button className="grid-item">6</button>
      <button className="grid-item">0</button>

      <button className="grid-item">1</button>
      <button className="grid-item">2</button>
      <button className="grid-item">3</button>

      <button>
        <i class="fas fa-times" />
      </button>
      <button>
        <i class="fas fa-minus" />
      </button>
      <button>
        <i class="fas fa-plus" />
      </button>
      <button>
        <i class="fas fa-equals" />
      </button>
    </div>
  );
};

export default NumberButton;
