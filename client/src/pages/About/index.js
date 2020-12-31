import React, { useEffect } from 'react';
import './style.css';
import AboutImage4 from '../../images/staticWebsite.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="about" id="about">
			<div className="about-container">
				<div className="img" data-aos="fade-right">
					<img alt="HTML and CSS" src={AboutImage4} />
				</div>

				<div className="smartphone" data-aos="fade-left">
					<div className="content">
						<div className="top_image">
							<img
								alt="MERN"
								src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/168257270/original/f78696dbacb2929525009ef4f3380f8ebdee8bab/develop-mern-stack-application.jpg"
							/>
						</div>
						<h2 className="title">About Me</h2>

						<div className="text-container">
							<div className="paragraph">
								I am results-oriented individual with unique background in
								computer science and software engineering. I am highly skilled
								in web development and have hands on experience with Html, CSS,
								JavaScript, React and other web programming languages. I have a
								passion for excellence while meeting the product expectations. I
								enjoy writing code and solving problems.
							</div>

							<div className="paragraph">
								I have a proven record of being a fast learner and problem
								solver. I can easily learn and adapt new technologies by just
								looking at code snippets and writing small pieces of my own. I
								am a hard worker and over achiever.
							</div>
						</div>
						{/* <a href="/testimonials" className="arrow right"></a>
						<a href="/" className="arrow left"></a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
