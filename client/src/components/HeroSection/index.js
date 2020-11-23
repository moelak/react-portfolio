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

const HeroSections = () => {
	return (
		<Spring
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			config={{ delay: 1000, duration: 1000 }}
		>
			{props => (
				<div>
					<HeroContainer>
						<HeroBg>
							<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
						</HeroBg>
						<Herotext>
							<HeroH1 style={props}>I'm a full stack Developer</HeroH1>
							<HeroP style={props}>
								I am results-oriented individual with unique background in
								computer science and software engineering.
							</HeroP>
							<Link
								className="linkOfHerobtn"
								to="about"
								smooth={true}
								duration={2000}
							>
								<span style={props} className="hero_btn">
									<span className="btn_text">hover me</span>
								</span>
							</Link>
						</Herotext>
					</HeroContainer>
				</div>
			)}
		</Spring>
	);
};

export default HeroSections;
