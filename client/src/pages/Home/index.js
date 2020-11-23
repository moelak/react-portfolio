import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeroSections from '../../components/HeroSection';
import About from '../../components/About';
import Testimonials from '../../components/Testimonials';
class Home extends Component {
	render() {
		return (
			<>
				<Navigation />
				<HeroSections />
				<About />
				<Testimonials />
			</>
		);
	}
}

export default Home;
