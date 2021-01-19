import React, { useState } from 'react';
import './style.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
const projectData = [
	{
		id: 1,
		image:
			'https://cdn.educba.com/academy/wp-content/uploads/2016/05/self-improvement.jpg',
		title: 'self_improvment',
		animation: 'fade-down-left',
		text: `The app focuses on the positive aspects only. Connect with other people with similar interests Raise awareness on important issues Seek or offer emotional support during tough times Promotes learning.`,
		link: 'https://powerful-reef-55363.herokuapp.com/index',
	},
	{
		id: 2,
		image:
			'https://www.scienceabc.com/wp-content/uploads/2019/01/face-detect.jpg',
		title: 'Face & Mouth Detection',
		animation: 'fade-down-right',
		text: `We are working on face recongnition so it can recognize facial expressions, and also included mouth detection, which detects the movements of the upper and lower lips. Which will be ultimatly interpreted and give visual indications, if the user is talking or silent.`,
		link: 'https://moelak.github.io/face-and-mouth-detection/',
	},

	{
		id: 3,
		image: 'https://digitalasset.intuit.com/IMAGE/A8ViK8rl9/mint-XS.jpg',
		title: 'Budget Tracker',
		animation: 'fade-down',
		text: `The budget tracker will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.`,
		link: 'https://github.com/moelak/budgetTracker',
	},

	{
		id: 4,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14GLU0fOtZF8Z8PG5jh09OwE3GkazIhOg9w&usqp=CAU',
		title: 'Password Generator',
		animation: 'fade-up-right',
		text: `Create an application that generates a random password based on user-selected criteria.This app will run in the browser and feature dynamically updated HTML and CSS powered by the JavaScript code`,
		link: 'https://moelak.github.io/password-generator/Develop/',
	},

	{
		id: 5,
		image: 'https://i.ytimg.com/vi/oKEmGGZxLa8/maxresdefault.jpg',
		title: 'Burger Logger ',
		animation: 'fade-up',
		text: `In this assignment, I'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)`,
		link: 'https://mysterious-refuge-15749.herokuapp.com/',
	},

	{
		id: 6,
		image: 'https://blog.trello.com/hubfs/Hidden-Time-final.png',
		title: 'Work Day Scheduler',
		animation: 'fade-up-left',
		text: `Created a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.`,
		link: 'https://moelak.github.io/work-day-scheduler/index.html',
	},
];

const Projects = () => {
	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft />
			</div>
		);
	};

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 600,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,

		responsive: [
			{
				breakpoint: 1138,
				settings: {
					slidesToShow: 2,
					centerMode: false /* set centerMode to false to show complete slide instead of 3 */,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 668,
				settings: {
					slidesToShow: 1,
					centerMode: false /* set centerMode to false to show complete slide instead of 3 */,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="project-container" id="project">
			<div className="header__project">
				<h1>
					<span className="pro__color">Pro</span>
					<span className="jects__color">jects</span>
				</h1>
			</div>
			<Slider {...settings}>
				{projectData.map((project, index) => (
					<div className="content-wrapper">
						<div
							key={project.id}
							className="news-card"
							data-aos={project.animation}
						>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="news-card__card-link"
							></a>

							<img
								src={project.image}
								alt={project.title}
								className="news-card__image"
							/>
							<div className="news-card__text-wrapper">
								<h5 className="news-card__title">{project.title}</h5>

								<div className="news-card__details-wrapper">
									<p className="news-card__excerpt">{project.text}</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="news-card__read-more"
									>
										Demo <i className="fas fa-long-arrow-alt-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Projects;
