class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
      <div className="calculator--screen">0</div>
      <div className="calculator--keys">
      <div className="white--keys">
      <div className="calculator--reset">
      <button className="calculator--key key--clear">clear</button>
      </div>
      <div className="digits">
      <button className="calculator--key" id="key--0">0</button>
      <button className="calculator--key" id="key--1">1</button>
      <button className="calculator--key" id="key--2">2</button>
      <button className="calculator--key" id="key--3">3</button>
      <button className="calculator--key" id="key--4">4</button>
      <button className="calculator--key" id="key--5">5</button>
      <button className="calculator--key" id="key--6">6</button>
      <button className="calculator--key" id="key--7">7</button>
      <button className="calculator--key" id="key--8">8</button>
      <button className="calculator--key" id="key--9">9</button>
      </div>
      </div>
      <div className="red--keys">
      <button className="calculator--key" id="key--divide">÷</button>
      <button className="calculator--key" id="key--multiply">x</button>
      <button classname="calculator--key" id="key--subtract">-</button>
      <button className="calculator--key" id="key--add">+</button>
      <button className="calculator--key" id="key--equals">=</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('target');
)