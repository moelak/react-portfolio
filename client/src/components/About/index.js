import React from 'react';
import {
	AboutContainer,
	AboutWraper,
	AboutRow,
	AboutColumn1,
	TextWraper,
	Heading,
	Text,
	AboutColumn2,
	ImgWrap,
	Img,
} from './AboutElement';
import './style.css';

import AboutImage from '../../images/aboutMe3.svg';

const About = () => {
	return (
		<>
			<AboutContainer>
				<AboutWraper>
					<AboutRow>
						<AboutColumn1>
							<TextWraper id="about">
								<div className="test">
									<div className="inner-text">
										<Heading>Heading</Heading>
										<Text>
											I am results-oriented individual with unique background in
											computer science and software engineering. I am highly
											skilled in web development and have hands on experience
											with Html, CSS, JavaScript, React and other web
											programming languages. I have a passion for excellence
											while meeting the product expectations. I enjoy writing
											code and solving problems.
										</Text>
										<Text>
											I have a proven record of being a fast learner and problem
											solver. I can easily learn and adapt new technologies by
											just looking at code snippets and writing small pieces of
											my own. I am a hard worker and over achiever.
										</Text>
									</div>
								</div>
							</TextWraper>
						</AboutColumn1>
						<AboutColumn2>
							<ImgWrap>
								<div className="inner-div-image">
									<Img src={AboutImage} />
								</div>
							</ImgWrap>
						</AboutColumn2>
					</AboutRow>
				</AboutWraper>
			</AboutContainer>
		</>
	);
};

export default About;
