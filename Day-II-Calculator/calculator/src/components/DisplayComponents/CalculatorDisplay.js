import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = { overflow: false }
        this.myRef = React.createRef();
        this.numRef = React.createRef();
    }
    componentDidUpdate(){
        if (this.props.clear){
            this.setState({
                overflow: false,
                clear: false,
            });
            return;
        }
        const displayWidth = this.myRef.current.offsetWidth - 25;
        if (this.numRef.current.offsetWidth > displayWidth){
            this.setState({ overflow: true });
        }
    }

    render(){
        return (
            <div ref={this.myRef} className='display'>
                <span ref={this.numRef}>{this.state.overflow ?
                'OVERFLOW' :
                this.props.display === null ? 
                0 : 
                this.props.display}</span>
            </div>
        );
    }
}

export default CalculatorDisplay;