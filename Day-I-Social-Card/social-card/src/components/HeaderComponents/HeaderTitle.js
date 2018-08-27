import React from 'react';
import './Header.css';

export default function HeaderTitle() {
    return (
        <div className="header-title">
            <span className="school-name" href="#"> Lambda School </span>
            <span className="school-social-media" href="#"> @LambdaSchool </span>
            <span className="date-posted" href="#" > &middot; 26 Jan </span>
        </div>
    )
}