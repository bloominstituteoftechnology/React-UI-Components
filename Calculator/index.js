const App = () => {
    return (
        <div className="container">
            <div className="column">
                <div className="row">
                    <Display />
                    <Button text="Clear" className="clear col-9" />
                    <Button text="÷" className="operator col-3" />
                </div>
                <div className="row">
                    <Button text="7" className="number col-3" />
                    <Button text="8" className="number col-3" />
                    <Button text="9" className="number col-3" />
                    <Button text="x" className="operator col-3" />
                </div>
                <div className="row">
                    <Button text="4" className="number col-3" />
                    <Button text="5" className="number col-3" />
                    <Button text="7" className="number col-3" />
                    <Button text="-" className="operator col-3" />
                </div>
                <div className="row">
                    <Button text="1" className="number col-3" />
                    <Button text="2" className="number col-3" />
                    <Button text="3" className="number col-3" />
                    <Button text="+" className="operator col-3" />
                </div>
                <div className="row">
                    <Button text="0" className="number col-9" />
                    <Button text="=" className="operator col-3" />
                </div>
            </div>
        </div>
    );
};

const Display = () => {
    return (
        <div className="display col-12 d-flex">
            <h2>0</h2>
        </div>
    );
};

const Button = props => {
    return <button className={`${props.className}`}>{props.text}</button>;
};

ReactDOM.render(<App />, document.getElementById("target"));
