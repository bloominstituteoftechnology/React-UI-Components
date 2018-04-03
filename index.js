const cardProps = [
  {
  title: "Lambda School",
  handle: "lambdaschool",
  date: "26 jan",
  image: {
    src: "https://ibin.co/3whrpKSBbZ81.png",
    alt: "lambda logo"
  },

  message:
    "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
  hero: {
    title: "Get started with React",
    message:
      "React makes it painless to create interactive UIs. Design simple view for eacth state in your application.",
    url: "reactjs.org",
    img: {
      src: "https://ibin.co/3wnC6SgIOJud.png",
      alt: "reactjs logo"
    }
  }
  }
];

const Card = ({ ...props }) => (
  <div className="Card--container">
    <img className="Card--logo" src={props.image.src} alt={props.image.alt} />
    <div className="Card">
      <h3 className="Card--title">{props.title}</h3>
      <a href={`https://twitter.com/${props.handle}`} className="Card--handle">
        @{props.handle}
      </a>
      <p className="Card--date">{props.date}</p>
      <p className="Card--message">{props.message}</p>
      <div className="Hero">
        <img
          className="Hero--image"
          src={props.hero.img.src}
          alt={props.hero.img.alt}
        />
        <h3>{props.hero.title}</h3>
        <p className="Hero--message">{props.hero.message}</p>
        <a href="reactjs.org" className="Hero--url">
          {props.hero.url}
        </a>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div>
      {cardProps.map(card => <Card {...card} />)}
      <div className="Calc--container" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("target"));
