import React, { useEffect } from 'react';
import './style.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const projectData = [
	{
		id: 1,
		image:
			'https://www.scienceabc.com/wp-content/uploads/2019/01/face-detect.jpg',
		title: 'Face & Mouth Detection',

		text: `We are working on face recongnition so it can recognize facial expressions, and also included mouth detection, which detects the movements of the upper and lower lips. Which will be ultimatly interpreted and give visual indications, if the user is talking or silent.`,
		link: 'https://moelak.github.io/face-and-mouth-detection/',
	},

	{
		id: 2,
		image: 'https://digitalasset.intuit.com/IMAGE/A8ViK8rl9/mint-XS.jpg',
		title: 'BudgetTracker',

		text: `The budget tracker will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.`,
		link: 'https://github.com/moelak/budgetTracker',
	},

	{
		id: 3,
		image:
			'https://cdn.educba.com/academy/wp-content/uploads/2016/05/self-improvement.jpg',
		title: 'self_improvment',

		text: `The app focuses on the positive aspects only. Connect with other people with similar interests Raise awareness on important issues Seek or offer emotional support during tough times Promotes learning.`,
		link: 'https://lit-depths-25209.herokuapp.com/login',
	},

	{
		id: 4,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14GLU0fOtZF8Z8PG5jh09OwE3GkazIhOg9w&usqp=CAU',
		title: 'Password Generator',

		text: `Create an application that generates a random password based on user-selected criteria.This app will run in the browser and feature dynamically updated HTML and CSS powered by the JavaScript code`,
		link: 'https://moelak.github.io/password-generator/Develop/',
	},

	{
		id: 5,
		image: 'https://i.ytimg.com/vi/oKEmGGZxLa8/maxresdefault.jpg',
		title: 'Burger Logger ',

		text: `In this assignment, I'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)`,
		link: 'https://mysterious-refuge-15749.herokuapp.com/',
	},

	{
		id: 6,
		image: 'https://blog.trello.com/hubfs/Hidden-Time-final.png',
		title: 'Work Day Scheduler',

		text: `Created a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.`,
		link: 'https://moelak.github.io/work-day-scheduler/index.html',
	},
];

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);

	return (
		<div class="project-container" id="project" data-aos="fade">
			<div class="content-wrapper">
				{projectData.map(project => (
					<div key={project.id} class="news-card">
						<a href="#" class="news-card__card-link"></a>
						<img src={project.image} alt="" class="news-card__image" />
						<div class="news-card__text-wrapper">
							<h2 class="news-card__title">{project.title}</h2>
							<div class="news-card__details-wrapper">
								<p class="news-card__excerpt">{project.text}</p>
								<a href={project.link} class="news-card__read-more">
									Demo <i class="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;