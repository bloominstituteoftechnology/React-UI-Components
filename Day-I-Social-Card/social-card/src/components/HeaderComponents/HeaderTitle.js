import React from 'react';
import './Header.css';
import moment from "moment";


const HeaderTitle = () => 
<div className="headerTitle">
    <h4>Lambda School</h4> 
    <h4 className="lambdagray">
    @LambdaSchool
    </h4>
        <p className="datethis">
        {moment().format('D MMM')}
        </p>
</div>


export default HeaderTitle