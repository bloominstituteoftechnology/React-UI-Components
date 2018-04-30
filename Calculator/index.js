const App = () => {
    return (
      <div className="container">
        <div className="column">
          <div className="row">
            <Display />
            <Button text="Clear" className="clear col-9" />
            <Button text="÷" className="operator col-3" />
          </div>
          <div className="row">
            <Button text="7" className="number col-3" />
            <Button text="8" className="number col-3" />
            <Button text="9" className="number col-3" />
            <Button text="x" className="operator col-3" />
          </div>
          <div className="row">
            <Button text="4" className="number col-3" />
            <Button text="5" className="number col-3" />
            <Button text="7" className="number col-3" />
            <Button text="-" className="operator col-3" />
          </div>
          <div className="row">
            <Button text="1" className="number col-3" />
            <Button text="2" className="number col-3" />
            <Button text="3" className="number col-3" />
            <Button text="+" className="operator col-3" />
          </div>
          <div className="row">
            <Button text="0" className="number col-9" />
            <Button text="=" className="equal col-3" />
          </div>
        </div>
      </div>
    );
  };
  
  const Display = () => {
    return (
      <div className="display col-12 d-flex">
        <h2>0</h2>
      </div>
    );
  };
  
  const Button = props => {
    return <button data-number={props.text} className={`${props.className}`}>{props.text}</button>;
  };
  
  ReactDOM.render(<App />, document.getElementById("target"));
  
  let holdArray = [];
  let holdNumber = [];
  let opArray = [];
  let counter = 0;
  
  let numButtons = document.querySelectorAll(".number");
  let display = document.querySelector(".display");
  numButtons.forEach(button => button.addEventListener("click", (e, i) => {
    // console.log(e.target.dataset.number);
    holdNumber.push(e.target.dataset.number);
    display.innerText = holdNumber.join('');
  }));
  
  let opButtons = document.querySelectorAll(".operator");
  opButtons.forEach(button => button.addEventListener("click", (e, i) => {
    // console.log(e.target.dataset.number);
    holdArray.push(holdNumber.join(''),e.target.dataset.number);
    holdNumber = [];
    console.log(holdArray, opArray);
  }));
  
  let clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", () => {
    holdNumber = [];
    holdArray = [];
    cache = 0;
    display.innerText = 0;
  });
  
  let cache = 0;
  
  let equalButton = document.querySelector(".equal");
  equalButton.addEventListener("click", () => {
    holdArray.push(holdNumber.join(''));
    cache += Number(holdArray[0]);
    holdArray.forEach((value, i) => {
      // if (holdArray[i] === "x") {
      //   cache += holdArray[i - 1] * holdArray[i + 1];
      //   holdArray[i + 1] = holdArray[i - 1] * holdArray[i + 1];
      //   holdArray[i - 1]
      // } else if (holdArray[i] === "÷") {
      //   cache += holdArray[i - 1] / holdArray[i + 1];
      // } else if (holdArray[i] === "+") {
      //   cache += holdArray[i - 1] + holdArray[i + 1];
      // } else if (h)
      console.log("Cache before if", cache);
      if(holdArray[i] === "+") {
        cache += Number(holdArray[i+1]);
      } else if(holdArray[i] === "-") {
        cache -= Number(holdArray[i+1]);
      } else if (holdArray[i] === "÷") {
        cache /= Number(holdArray[i+1]);
      } else if (holdArray[i] === "x") {
        cache *= Number(holdArray[i+1]);
      }
    });
    console.log("Cache after if is:",cache);
    display.innerText = cache;
    cache = 0;
  });
  