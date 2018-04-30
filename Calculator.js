const Display = () => (
    <div className="row">
        <div className="col-12 text-right">0</div>
    </div>
);

const Clear = () => (
    <div className="col-9 text-center">clear</div>
);

const Operation = props => (
    <div className="col-3 text-center">{props.type}</div>
);

const Result = () => (
    <div className="col-3 text-center">=</div>
);

const Digit = props => {
    if (props.digit === "0"){
        return (<div className="col-9 text-center">{props.digit}</div>)
    } else {
        return (<div className="col-3 text-center">{props.digit}</div>);
    }
};

const Calculator = () => (
    <div id="calculator" className="container">
        <h1>Calculator</h1>
            <Display />
        <div className="row">
            <Clear />
            <Operation type="/" />
        </div>
        <div className="row">
            <Digit digit="8" />
            <Digit digit="7" />
            <Digit digit="9" />
            <Operation type="X" />
        </div>
        <div className="row">
            <Digit digit="4" />
            <Digit digit="5" />
            <Digit digit="6" />
            <Operation type="-" />
        </div>
        <div className="row">
            <Digit digit="1" />
            <Digit digit="2" />
            <Digit digit="3" />
            <Operation type="+" />
        </div>
        <div className="row">
            <Digit digit="0" />
            <Result />
        </div>
    </div>
);


ReactDOM.render(<Calculator />, document.getElementById('calculator'));