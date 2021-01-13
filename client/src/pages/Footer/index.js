import React from 'react';
import './style.css';
import Pdf from '../../pdf/Resume-Mohammad-Laknahour.pdf';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
	return (
		<footer>
			<svg viewBox="0 0 120 16">
				<defs>
					<path
						id="wave"
						d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
					/>
				</defs>

				<use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2"></use>
				<use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0"></use>
			</svg>

			<div>
				<div class="social__icon">
					Created by Moe ©2020
					<span class="linkedin">
						<SocialIcon url="https://www.linkedin.com/in/mohammad-laknahour-24279b109/" />{' '}
					</span>
					<span class="github">
						<SocialIcon url="https://github.com/moelak" />
					</span>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
