import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function Sidebar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [selected, setSelectedMenueItem] = useState(SidebarData[0].title);

	// displaySidebar func to turn ON and OFF the sidebar

	const displayColor = title => {
		setSelectedMenueItem(title);
	};

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
									onClick={() => displayColor(sidebarItem.title)}
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
