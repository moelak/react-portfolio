import React, { useEffect } from 'react';

import './style.css';
import { Spring } from 'react-spring/renderprops';

import AboutImage1 from '../../images/aboutMe3.svg';
import AboutImage2 from '../../images/bg.svg';
import AboutImage3 from '../../images/avatar.svg';
import Wave from '../../images/wave.png';
import AboutImage4 from '../../images/staticWebsite.svg';
import AboutMe3 from '../../images/aboutMe4.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<Spring
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			config={{ delay: 1000, duration: 1000 }}
		>
			{props => (
				<div class="about" id="about">
					<div class="about-container">
						<div style={props} class="img" data-aos="fade-right">
							<img src={AboutImage4} />
						</div>
						<div class="about-content" data-aos="flip-up">
							<h2 class="title">About Me</h2>

							<div style={props} className="text-container">
								<div class="paragraph">
									I am results-oriented individual with unique background in
									computer science and software engineering. I am highly skilled
									in web development and have hands on experience with Html,
									CSS, JavaScript, React and other web programming languages. I
									have a passion for excellence while meeting the product
									expectations. I enjoy writing code and solving problems.
								</div>
								<div class="paragraph">
									I have a proven record of being a fast learner and problem
									solver. I can easily learn and adapt new technologies by just
									looking at code snippets and writing small pieces of my own. I
									am a hard worker and over achiever.
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Spring>
	);
};

export default About;
