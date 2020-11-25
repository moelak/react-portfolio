import React from 'react';
import Video from '../../Video/networking3.mp4';
import './style.css';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	Herotext,
	HeroH1,
	HeroP,
} from './HeroElement';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-scroll';
import Pdf from '../../pdf/Resume-Mohammad-Laknahour.pdf';

const HeroSections = () => {
	return (
		<Spring
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			config={{ delay: 1000, duration: 1000 }}
		>
			{props => (
				<div id="home">
					<HeroContainer>
						<VideoBg autoPlay loop muted src={Video} type="video/mp4" />

						<Herotext>
							<HeroH1 style={props}>I'm a full stack Developer</HeroH1>
							<HeroP style={props}>
								I am results-oriented individual with unique background in
								computer science and software engineering.
							</HeroP>

							<div className="hero-btn-container">
								<Link
									style={props}
									className="linkOfHerobtn"
									to="about"
									smooth={true}
									duration={2000}
								>
									<span className="hero_btn">
										<a href="#" className="btn btn-blue btn-animation-1">
											About Me
										</a>
									</span>
								</Link>
								<Link
									style={props}
									href={Pdf}
									download
									className="nav-text"
									id="resume"
								>
									<span className="hero_btn">
										<a href="#" className="btn btn-red btn-animation-1">
											Download Resume
										</a>
									</span>
								</Link>
							</div>
						</Herotext>
					</HeroContainer>
				</div>
			)}
		</Spring>
	);
};

export default HeroSections;
