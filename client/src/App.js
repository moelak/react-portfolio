import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
	// window.onbeforeunload = function () {
	// 	window.scrollTo(0, 0);
	// };
	return (
		<div>
			<Sidebar />
			<Home />
			<About />
			<Testimonials />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
