import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <p>
            <span className="font-weight-bold">Lambda School</span>
            <span className="text-muted"> @LambdaSchool &middot; 11 June</span>
        </p>
    );
};

export default HeaderTitle;