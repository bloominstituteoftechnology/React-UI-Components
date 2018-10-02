import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div className="header-title">
            <h1 className="header-name">{props.name}</h1>
            <h2 className="handle-date">{`@${props.handle} · ${formatDate(props.date)}`}</h2>
        </div>
    )
}

function formatDate(date) {
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "nov", "dec"];
    return `${date.getDate()} ${months[date.getMonth()]}`;
};

export default HeaderTitle;