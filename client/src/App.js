import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/testimonials" component={Testimonials} />
				<Route path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
