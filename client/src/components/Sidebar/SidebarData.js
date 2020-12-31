import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		class_Name: 'nav-text',
		active_class_Name: 'nav-links active',
	},
	{
		title: 'About',
		path: '/about',
		icon: <IoIcons.IoIosPerson />,
		class_Name: 'nav-text',
		active_class_Name: 'nav-links active',
	},
	{
		title: 'Testimonials',
		path: '/testimonials',
		icon: <IoIcons.IoIosChatbubbles />,
		class_Name: 'nav-text',
		active_class_Name: 'nav-links active',
	},
	{
		title: 'Projects',
		path: '/projects',
		icon: <AiIcons.AiFillProject />,
		class_Name: 'nav-text',
		active_class_Name: 'nav-links active',
	},
	{
		title: 'Contact',
		path: '/contact',
		icon: <FaIcons.FaEnvelopeOpenText />,
		class_Name: 'nav-text',
		active_class_Name: ' active',
	},
];
