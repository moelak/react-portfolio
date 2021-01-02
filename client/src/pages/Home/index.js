import React from 'react';
import Video from '../../Video/networking3.mp4';
import './style.css';
import { VideoBg } from './HeroElement';
import Pdf from '../../pdf/Resume-Mohammad-Laknahour.pdf';
import { MDBMask, MDBView } from 'mdbreact';

const HeroSections = () => {
	return (
		<div className="hero-wrapper home">

			<VideoBg autoPlay loop muted src={Video} type="video/mp4" />

			<div className="overlay">
				<div className="hero-content">
					<h1>I'm a full stack Developer</h1>
					<p>
						I am results-oriented individual with unique background in computer
						science and software engineering.
					</p>
					<div className="btns">
						<button
							className="download_btn"
							onClick={event => {
								event.preventDefault();
								window.open(Pdf);
							}}
						>
							Download Resume
						</button>

						{/* <a href="/about" className="arrow right"></a> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSections;
