import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <section className="card-header-title">
            <h1>Lambda School</h1>
            <p><span className="at-symbol">@</span>LambdaSchool&nbsp;<span className="dot-symbol">&middot;</span>&nbsp;26 jan</p>
        </section>
    );
};

export default HeaderTitle;