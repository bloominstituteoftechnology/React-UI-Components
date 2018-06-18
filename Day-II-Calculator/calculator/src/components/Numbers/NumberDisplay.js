import React from 'react';
import './Number.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        let change = document.querySelectorAll('input');
        let changed = document.querySelectorAll('input');
        change.addEventListener('click', () => {
            return changed.props.name = change.props.name;
        });
    }
}

const MyNumber = props => {
    return <p className={props.number}>{props.name}</p>
}

const NumberDisplay = () => {
    return <div className='row number'>
        <MyNumber number='number' name='0' />
    </div>
}

export default NumberDisplay;