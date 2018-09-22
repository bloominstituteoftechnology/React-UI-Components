import React from "react";
import "./Button.css";

const NumberButton = () => {
  // prop.displayNumber === 1
  return (
    <div id="container" class="flexChild columnParent">
      {/* <div id="columnChild_DISPLAY" class="flexChild">
        Display
      </div> */}

      <div id="columnChild71279" class="flexChild rowParent">
        <div id="btn-clear" class="flexChild">
          clear
        </div>

        <div id="btn-signDivision" class="flexChild">
          ÷
        </div>
      </div>

      <div id="columnChild84487" class="flexChild rowParent">
        <div id="rowChild59152" class="flexChild rowParent">
          <div id="btn-7" class="flexChild">
            7
          </div>

          <div id="btn-8" class="flexChild">
            8
          </div>
        </div>

        <div id="rowChild6982" class="flexChild rowParent">
          <div id="btn-9" class="flexChild">
            9
          </div>

          <div id="btn-signMultiplication" class="flexChild">
            x
          </div>
        </div>
      </div>

      <div id="columnChild41626" class="flexChild rowParent">
        <div id="rowChild30066" class="flexChild rowParent">
          <div id="btn-4" class="flexChild">
            4
          </div>

          <div id="btn-5" class="flexChild">
            5
          </div>
        </div>

        <div id="rowChild75049" class="flexChild rowParent">
          <div id="btn-6" class="flexChild">
            6
          </div>

          <div id="btn-signSubtraction" class="flexChild">
            -
          </div>
        </div>
      </div>

      <div id="columnChild14109" class="flexChild rowParent">
        <div id="rowChild99257" class="flexChild rowParent">
          <div id="btn-1" class="flexChild">
            1
          </div>

          <div id="btn-2" class="flexChild">
            2
          </div>
        </div>

        <div id="rowChild22147" class="flexChild rowParent">
          <div id="btn-3" class="flexChild">
            3
          </div>

          <div id="btn-signAddition" class="flexChild">
            +
          </div>
        </div>
      </div>

      <div id="columnChild50680" class="flexChild rowParent">
        <div id="btn-0" class="flexChild selected">
          0
        </div>

        <div id="btn-signEquals" class="flexChild">
          {" "}
          ={" "}
        </div>
      </div>
    </div>
  );
};
export default NumberButton;
