const Display = () => (
    <div className="row">
        <div className="col-12 text-right">0</div>
    </div>
);

/*
 
  ____  _  _  __  ___    ___    __     _  _  __  ____    _    _  __  ___   _ _   ___ 
 (_  _)( )( )(  )/ __)  (   \  /  \   ( \( )/  \(_  _)  ( \/\/ )/  \(  ,) ( ) ) / __)
   )(   )__(  )( \__ \   ) ) )( () )   )  (( () ) )(     \    /( () ))  \  )  \ \__ \
  (__) (_)(_)(__)(___/  (___/  \__/   (_)\_)\__/ (__)     \/\/  \__/(_)\_)(_)\_)(___/
 
*/
// const Clear = function (props) {
//     this.clear = function () {
//         console.log('Clear(...) clicked');
//     }
//     return (<div onClick={this.clear.bind(this)} className="col-9 text-center">clear</div>)
// };
class Clear extends React.Component {
    constructor(props){
        super(props);
    }
    clear() {
        console.log('Clear(...) clicked');
    }
    render() {
        return (<div onClick={this.clear.bind(this)} className="col-9 text-center">clear</div>)
    }
}

/*
 const Operation = props => (
     <div className="col-3 text-center">{props.type}</div>
 );
*/
class Operation extends React.Component {
    constructor(props) {
        super(props);
        
        // OPTION-1 ->THIS WORKS
            // this.operation = this.operate.bind(this);
        // OPTION-2 ->THIS WORKS
            this.toRender = (<div onClick={this.operate.bind(this)} className="col-3 text-center">{this.props.type}</div>);
    }
    operate(e) {
        console.log(e.target.textContent);
    }
    render() {
        // OPTION-1 ->THIS WORKS
            // return (<div onClick={this.operation} className="col-3 text-center">{this.props.type}</div>);
        // OPTION-2 ->THIS WORKS
            return this.toRender;
    }
}

const Result = () => (
    <div className="col-3 text-center">=</div>
);

/*
 const Digit = function (props) {
     if (props.digit === "0"){
         return (<div className="col-9 text-center">{props.digit}</div>)
     } else {
         return (<div className="col-3 text-center">{props.digit}</div>);
     }
 };
 Digit.prototype = Object.create(React.Component.prototype);
*/
class Digit extends React.Component {
    constructor(props) {
        super(props);

        this.toRender;
        if (props.digit === "0"){
            this.toRender = (<div onClick={this.clicked} className="col-9 text-center">{props.digit}</div>)
        } else {
            this.toRender = (<div onClick={this.clicked} className="col-3 text-center">{props.digit}</div>);
        }

        this.clicked = this.clicked.bind(this);
    }
    clicked(e) {
        console.log(e.target.textContent);
    }
    render() {
        return this.toRender;
    }
}

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