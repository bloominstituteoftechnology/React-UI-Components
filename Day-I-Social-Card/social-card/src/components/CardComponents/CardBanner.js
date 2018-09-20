import React from 'react';
import './Card.css';

class Lambda extends React.Component {
    render() {
        const name = "Lambda School";
        return (
            <h1>{name}</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Lambda />, app);