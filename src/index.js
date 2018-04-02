const cardProps = {
  title: "Lambda School",
  handle: "@lambdaschool",
  date: "26 jan",
  message:
    "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
  hero: {
    title: "Get started with React",
    message:
      "React makes it painless to create interactive UIs. Design simple view for eacth state in your application.",
    url: "reactjs.org"
  }
};

const { hero } = cardProps;

const App = () => {
  return (
    <div className="container">
      <img
        className="logo"
        src="https://ibin.co/3whrpKSBbZ81.png"
        alt="lambda logo"
      />
      <div className="Card">
        <h3 className="Card--title">{cardProps.title}</h3>
        <a
          href="https://twitter.com/{cardProps.handle}"
          className="Card--handle"
        >
          {cardProps.handle}
        </a>
        <p className="Card--date">{cardProps.date}</p>
        <p className="Card--message">{cardProps.message}</p>
        <div className="Hero">
          <img
            className="Hero--image"
            src="https://ibin.co/3wnC6SgIOJud.png"
            alt="react logo"
          />
          <h3>{hero.title}</h3>
          <p className="Hero--message">{hero.message}</p>
          <a href="reactjs.org" className="Hero--url">
            {hero.url}
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("target"));
