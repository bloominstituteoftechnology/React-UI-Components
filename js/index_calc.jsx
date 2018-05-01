const Display = () => {
  return (
    <div className="display">0</div>
  );
}

const NormalButton = () => {
  return (
    <div className="normalButton">1</div>
  );
}

const BigButton = () => {
  return (
    <div className="bigButton">1</div>
  );
}

const App = () => {
  return (
    <div className="calculator">
      <Display />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('target'));
