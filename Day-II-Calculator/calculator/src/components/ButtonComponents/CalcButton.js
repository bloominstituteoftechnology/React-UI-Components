import React from 'react';
import './Button.css';

class CalcButton extends React.Component {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        let classString = 'calc-button';
        if(this.props.className){
            classString = this.props.className + ' ' + classString;
        }
        return (
            <div className={classString}>
                {this.props.children}
            </div>
        );
    }
}

export default CalcButton;