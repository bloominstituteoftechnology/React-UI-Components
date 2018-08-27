import React from 'react';
import './Header.css';

let alias = 'Lambda School';
let handle = '@LambdaSchool';
let timestamp = '26 jan';

const HeaderTitle = () =>(
    <div>
        {`${alias} ${handle} ${timestamp}`}
    </div>
);

export default HeaderTitle;