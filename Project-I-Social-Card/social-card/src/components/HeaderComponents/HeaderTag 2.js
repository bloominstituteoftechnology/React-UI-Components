import React from 'react';

const today = new Date();
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];

const HeaderTag = () => {
    return(
        <div className="header-date">
            <p className="tag-txt">
                @LambdaSchool &middot; {today.getDate()} {months[today.getMonth()]}
            </p>
        </div>
    );
}

export default HeaderTag;