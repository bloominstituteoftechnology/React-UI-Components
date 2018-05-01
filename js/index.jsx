
const LambdaHeader = () => {
  return (
    <div className="headerContainer">
      <h4 className="lambdaHeader">Lambda School &nbsp;</h4>
      <h5 className="subHeader lambdaHeader">@LambdaSchool * 26 Jan</h5>
    </div>
  );
}

const LambdaBlurb = () => {
  return (
    <div className="lambdaBlurb">
      <p> Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
  );
}

const LambdaLogo = () => <img src="https://ibin.co/3whrpKSBbZ81.png" className="lambdaLogo" />;

const MiddleImg = () => <img src="https://ibin.co/3wnC6SgIOJud.png" className="middleImg" />

const BottomContent = () => {
  return (
    <div className="bottomContent">
      <h4>Get started with React</h4>
      <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>
      <h5 className="subHeader">reactjs.org</h5>
    </div>
  );
}


const App = () => {
  return (
    <div className="container">
      <LambdaLogo />
      <div className="mainContent">
        <LambdaHeader />
        <LambdaBlurb  />
        <MiddleImg />
        <BottomContent />
      </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('target'));
