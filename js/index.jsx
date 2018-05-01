
const PosterName = () => {
  return (
    <div className="posterName">
      
    </div>
  )
}

const LambdaLogo = () => <img src="https://ibin.co/3whrpKSBbZ81.png" className="lambdaLogo" />;

  const App = () => {
    return (
      <div className="container">
        <LambdaLogo />
        <h1>React Social Card</h1>
      </div>
  )};


ReactDOM.render(<App />, document.getElementById('target'));
