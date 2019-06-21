const LeftLogo =  () => <img src ="https://ibin.co/3whrpKSBbZ81.png" className="leftLogo" alt="LambdaImage" />;

const Header = () => {
  return (
    <div><h1>Lambda School</h1>
    <p>Let's Learn React by learning simple interfaces</p></div>
  ); 
}
const MainImage = () => {
  return(
    <img src="https://ibin.co/3wnC6SgIOJud.png" className="MainImage" /> 
 ); 
}

const MainContent = () => {
  return(
    <div className="MainContent">
       <h1>Get Started with React</h1>
       <p>React makes it painless to create Interactive UIs</p>
    </div>
    
  );
}

const App = () => {
  return (
    <div className="container"> 
      <div className="column"> 
        <LeftLogo/>
      </div>
      <div className="column">
        <Header/>
       
        <div className="BorderDiv">  
          <MainImage/> 
          <MainContent/>
        </div>
      </div>
    </div>
    
)};

ReactDOM.render(<App />, document.getElementById('target'));
