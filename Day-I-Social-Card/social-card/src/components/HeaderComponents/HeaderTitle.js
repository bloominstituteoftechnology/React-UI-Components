import React from 'react';
import './Header.css';
import DateFormatted from './DateFormatted';

export default function HeaderTitle() {
    return (
        <div className="header-title">
            <span className="school-name" href="#"> Lambda School </span>
            <span className="school-social-media" href="#"> @LambdaSchool </span>
            <DateFormatted />
        </div>
    )
}