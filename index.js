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
  divideBy = _By(divide),
  equalBy = func => func();

const funcs = {
  addBy,
  subtractBy,
  multiplyBy,
  divideBy,
  equalBy
};

const calcDictionary = {
  divide: "/",
  multiply: "x",
  subtract: "-",
  add: "+"
};

// god this looks ugly...
const CalculatorLayout = () => (
  <div className="Calc--container">
    {/* the consumer here makes all my state available inside the callback */}
    <CalcContext.Consumer>
      {context => (
        <React.Fragment>
          <div alt="current" className="Calc--buttons Calc--current">
            {context.state.current}
          </div>
          <div
            alt="clear"
            onClick={e => context.onClear()}
            className="Calc--buttons Calc--clear"
          >
            clear
          </div>
          <div
            alt="equal"
            className={`Calc--buttons Calc--funcs Calc--funcs__equal`}
            key="equal"
            onClick={e =>
              context.onEqual(funcs[`equalBy`], context.state.current)
            }
          >
            =
          </div>
          {/* make function buttons */}
          {Object.keys(calcDictionary).map(func => (
            <div
              alt={func}
              className={`Calc--buttons Calc--funcs Calc--funcs__${func}`}
              key={func}
              onClick={e =>
                context.onFunc(funcs[`${func}By`], context.state.current)
              }
            >
              {calcDictionary[func]}
            </div>
          ))}

          {/* programmatically make calc numb buttons */}
          {[
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
          ].map((word, i) => (
            <div
              alt={word}
              onClick={e => context.onNumber(e.target.textContent)}
              className={`Calc--buttons Calc--numbers Calc--numbers__${word}`}
              key={i}
            >
              {i}
            </div>
          ))}
        </React.Fragment>
      )}
    </CalcContext.Consumer>
  </div>
);

// learn how to context
// https://www.youtube.com/watch?v=XLJN4JfniH4
const CalcContext = React.createContext();

// this is where the brain of the operation is
class CalcProvider extends React.Component {
  state = {
    current: 0,
    total: 0
  };
  render() {
    return (
      <CalcContext.Provider
        value={{
          state: this.state,
          onNumber: num =>
            this.setState({ current: +(this.state.current.toString() + num) }),
          onFunc: (f, num) =>
            this.setState({
              total: f(num),
              current: 0
            }),
          onEqual: (f, num) =>
            typeof this.state.total === "function"
              ? this.setState({ current: f(this.state.total(num)) })
              : this.setState({ current: 0 }),
          onClear: e => this.setState({ current: 0, total: 0 })
        }}
      >
        {this.props.children}
      </CalcContext.Provider>
    );
  }
}

const Calculator = () => (
  <CalcProvider>
    <CalculatorLayout />
  </CalcProvider>
);

const App = () => {
  return (
    <div>
      {cardProps.map(card => <Card {...card} key={`card-${card.title}`} />)}
      <Calculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("target"));
