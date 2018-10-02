import React from 'react';
import MessageCircle from './message';
import Retweet from './Retweet';
import Like from './Like';
import './Footer.css';

const Footer = () => (
	<footer>
		<MessageCircle />
		<Retweet />
		<Like />
	</footer>
);

export default Footer;