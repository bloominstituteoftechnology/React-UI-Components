import React from "react";
import "./Button.css";

const WhiteButtons = () => {
  let ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="white-btns">
      <div className="btn zero">0</div>

      {
        (ints = ints.map(int => (
          <div className="btn num" key={int}>
            {int}
          </div>
        )))
      }
      <div className="btn clear">clear</div>
    </div>
  );
};

export default WhiteButtons;
