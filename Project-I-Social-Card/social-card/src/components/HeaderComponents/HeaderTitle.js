import React from "react";
import "./Header.css";

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
            <h2 className="header-title">Lambda School</h2>
            <div className="header-link">@LambdaSchool</div>
            <div className="header-time">• 26 jan</div>
        </div>
    );
};

export default HeaderTitle;