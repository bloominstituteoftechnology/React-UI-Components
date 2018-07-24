import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './Footer.css';

const HeartIcon=()=><i className="fa fa-heart fa-1x"></i>;
const Envelope=()=><i className="fa fa-envelope fa-1x"></i>;
const Comment=()=><i className="fa fa-comment fa-1x"></i>;
const Sync=()=><i className="fa fa-refresh fa-1x"></i>;

let refreshTotal=0;
let heartTotal=0;

const IconContainer=()=><div className='icon-container'><Comment/><div><Sync/><span className='text'>{refreshTotal}</span></div><div><HeartIcon/><span className='text'>{heartTotal}</span></div><Envelope/></div>;

export default IconContainer;
