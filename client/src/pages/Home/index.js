import React, { useEffect } from 'react';
import Video from '../../Video/networking3.mp4';
import './style.css';
import { VideoBg } from './HeroElement';
import Pdf from '../../pdf/Resume-Mohammad-Laknahour.pdf';
import { MDBMask, MDBView } from 'mdbreact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroSections = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="hero-wrapper home" id="home">
			<VideoBg autoPlay loop muted src={Video} type="video/mp4" />

			<div className="overlay">
				<div className="hero-content">
					<h1 className="home__header" data-aos="fade-right">
						<span className="hero__words1">I'm</span>
						<span className="hero__words2">a</span>
						<span className="hero__words3">full</span>
						<span className="hero__words4">stack</span>
						<span className="hero__words5">Developer</span>
					</h1>
					<p className="home__paragraph" data-aos="fade-left">
						I am results-oriented individual with unique background in computer
						science and software engineering.
					</p>
					<div data-aos="fade-up" className="btns">
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
