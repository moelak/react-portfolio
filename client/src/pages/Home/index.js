import React, { Component, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import HeroSections from '../../components/HeroSection';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<>
			<Navigation />
			<HeroSections />
			<About />
			<Testimonials />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
