import React from 'react'; //shortcut is "rafce" to create the whole import and function
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Pdf from '../../pdf/Resume-Mohammad-Laknahour.pdf';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-scroll';

function Navigation() {
	return (
		<Spring
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			config={{ delay: 500, duration: 500 }}
		>
			{props => (
				<div>
					<Navbar className="navbar-bg" expand="lg">
						<Navbar.Brand href="#home">
							<img
								src="https://react-bootstrap.github.io/logo.svg"
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="React Bootstrap logo"
							/>{' '}
							<span className="logo-name">React Bootstrap</span>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="justify-content-center" style={{ width: '100%' }}>
								<Nav.Link style={props} className="nav-text mx-3" href="#home">
									Home
								</Nav.Link>
								<Nav.Link style={props} className="nav-text mx-3" href="#link">
									About
								</Nav.Link>
								<Nav.Link style={props} className="nav-text mx-3" href="#link">
									Testomonial
								</Nav.Link>
								<Nav.Link style={props} className="nav-text mx-3" href="#link">
									Contact
								</Nav.Link>
								<Nav.Link style={props} className="nav-text mx-3" href="#link">
									Project
								</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link
									style={props}
									href={Pdf}
									download
									className="nav-text"
									id="resume"
								>
									Resume
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			)}
		</Spring>
	);
}

export default Navigation;
