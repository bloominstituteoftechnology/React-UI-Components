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

      <BigButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <NormalButton />
      <BigButton />
      <NormalButton />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('target'));
