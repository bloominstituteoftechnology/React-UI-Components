const Display = (props) => {
  return (
    <div className="display">{props.calcDisplay}</div>
  );
}

const NormalButton = (props) => {
  return (
    <div className={'normalButton ' + props.custClass}>{props.text}</div>
  );
}

const BigButton = (props) => {
  return (
    <div className={'bigButton ' + props.custClass}>{props.text}</div>
  );
}

const App = () => {
  return (
    <div className="calculator">
      <Display calcDisplay="80085"/>

      <BigButton text="clear" />
      <NormalButton text="/" custClass="opButton" />
      <NormalButton text="7" />
      <NormalButton text="8" />
      <NormalButton text="9" />
      <NormalButton text="*" custClass="opButton" />
      <NormalButton text="4" />
      <NormalButton text="5" />
      <NormalButton text="6" />
      <NormalButton text="-" custClass="opButton" />
      <NormalButton text="1" />
      <NormalButton text="2" />
      <NormalButton text="3" />
      <NormalButton text="+" custClass="opButton" />
      <BigButton text="0" />
      <NormalButton text="=" custClass="opButton" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('target'));
