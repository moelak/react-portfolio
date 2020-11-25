import React, { Component } from 'react'; //shortcut is "rafce" to create the whole import and function
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import logo from '../../images/MOE1.jpg';
import ScrollspyNav from 'react-scrollspy-nav';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({ menu: !this.state.menu });
	}

	render() {
		const show = this.state.menu ? 'show' : '';
		return (
			<ScrollspyNav
				scrollTargetIds={['home', 'about', 'testimonial', 'project', 'contact']}
				offset={(-80, -80, -80, -80, -160)}
				activeNavClass="active"
			>
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
					config={{ delay: 300, duration: 300 }}
				>
					{props => (
						<div>
							<Navbar className="navbar-bg" expand="lg">
								<Navbar.Brand>
									<img
										src={logo}
										width="30"
										height="30"
										className="d-inline-block align-top"
										alt="React Bootstrap logo"
									/>{' '}
									{/* <span className="logo-name">React Bootstrap</span> */}
								</Navbar.Brand>

								<Navbar.Toggle
									aria-controls="basic-navbar-nav"
									onClick={this.toggleMenu}
								/>
								<Navbar.Collapse
									id="basic-navbar-nav"
									className={'collapse navbar-collapse ' + show}
								>
									<Nav
										className="justify-content-center"
										style={{ width: '100%' }}
									>
										<Nav.Link
											style={props}
											className="nav-text mx-3 active"
											href="#home"
										>
											Home
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</Nav.Link>
										<Nav.Link
											style={props}
											className="nav-text mx-3"
											href="#about"
										>
											About
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</Nav.Link>
										<Nav.Link
											style={props}
											className="nav-text mx-3"
											href="#testimonial"
										>
											Testimonial
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</Nav.Link>
										<Nav.Link
											style={props}
											className="nav-text mx-3"
											href="#project"
										>
											Project
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</Nav.Link>
										<Nav.Link
											style={props}
											className="nav-text mx-3"
											href="#contact"
										>
											Contact
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</div>
					)}
				</Spring>
			</ScrollspyNav>
		);
	}
}
