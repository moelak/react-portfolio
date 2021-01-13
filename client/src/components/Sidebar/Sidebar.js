import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { Link } from 'react-scroll';

function Sidebar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [selected, setSelectedMenueItem] = useState(SidebarData[0].title);

	// displaySidebar func to turn ON and OFF the sidebar

	const displayColor = title => {
		setSelectedMenueItem(title);
	};

	const updatetheActive = () => {};

	return (
		<>
			<nav className="navbar">
				<Link
					to="home"
					smooth={true}
					duration={1000}
					className="navbar-logo"
					onClick={() => {
						closeMobileMenu();
						updatetheActive();
					}}
				>
					MOE
					<i className="fab fa-firstdraft" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul
					className={click ? 'nav-menu active' : 'nav-menu'}
					onClick={closeMobileMenu}
				>
					{SidebarData.map((sidebarItem, index) => {
						const isItemSelected = selected === sidebarItem.title;
						return (
							<li className="nav-item" key={index}>
								<Link
									to={sidebarItem.path}
									smooth={true}
									duration={1000}
									onClick={() => {
										displayColor(sidebarItem.title);
										closeMobileMenu();
									}}
									className={
										isItemSelected ? sidebarItem.active_class_Name : 'nav-links'
									}
								>
									{sidebarItem.icon}
									<span>{sidebarItem.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
