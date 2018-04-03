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

const Calc = {
  current: "0",
  total: 0
};

// functional programming wooOoOOOOoOoO
// Currying: https://www.youtube.com/watch?v=iZLP4qOwY8I
const getTotal = func => num => func(num);
const add = num => numNext => getTotal(() => num + numNext);
const subtract = num => numNext => getTotal(() => num - numNext);
const multiply = num => numNext => getTotal(() => num * numNext);
const divide = num => numNext => getTotal(() => num / numNext);

const _By = _ => num => _(num);

const addBy = _By(add),
  subtractBy = _By(subtract),
  multiplyBy = _By(multiply),
  divideBy = _By(divide);

// god this looks ugly...
const Calculator = ({ ...props }) => (
  <div className="Calc--container">
    <div alt="current" className="Calc--buttons Calc--current">
      {props.current}
    </div>
    <div alt="clear" className="Calc--buttons Calc--clear">
      clear
    </div>
    <div alt="divide" className="Calc--buttons Calc--funcs Calc--funcs__divide">
      /
    </div>
    <div
      alt="multiply"
      className="Calc--buttons Calc--funcs Calc--funcs__multiply"
    >
      x
    </div>
    <div
      alt="subtract"
      className="Calc--buttons Calc--funcs Calc--funcs__subtract"
    >
      -
    </div>
    <div alt="add" className="Calc--buttons Calc--funcs Calc--funcs__add">
      +
    </div>
    <div alt="equal" className="Calc--buttons Calc--funcs Calc--funcs__equal">
      =
    </div>
    <div
      alt="seven"
      onClick={e =>
        console.log(
          Object.assign(props, {
            current: props.current + e.target.textContent
          })
        )
      }
      className="Calc--buttons Calc--numbers Calc--numbers__seven"
    >
      7
    </div>
    <div
      alt="eight"
      className="Calc--buttons Calc--numbers Calc--numbers__eight"
    >
      8
    </div>
    <div alt="nine" className="Calc--buttons Calc--numbers Calc--numbers__nine">
      9
    </div>
    <div alt="four" className="Calc--buttons Calc--numbers Calc--numbers__four">
      4
    </div>
    <div alt="five" className="Calc--buttons Calc--numbers Calc--numbers__five">
      5
    </div>
    <div alt="six" className="Calc--buttons Calc--numbers Calc--numbers__six">
      6
    </div>
    <div alt="one" className="Calc--buttons Calc--numbers Calc--numbers__one">
      1
    </div>
    <div alt="two" className="Calc--buttons Calc--numbers Calc--numbers__two">
      2
    </div>
    <div
      alt="three"
      className="Calc--buttons Calc--numbers Calc--numbers__three"
    >
      3
    </div>
    <div alt="zero" className="Calc--buttons Calc--numbers Calc--numbers__zero">
      0
    </div>
  </div>
);

const App = () => {
  return (
    <div>
      {cardProps.map(card => <Card {...card} />)}
      <Calculator {...Calc} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("target"));
