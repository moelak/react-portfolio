import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SidebarData } from '../../components/Sidebar/SidebarData';

// Import Swiper styles
import 'swiper/swiper.scss';

import './style.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Aidin from './assets/Aidin-Sadighi.jpg';
import Thomas from './assets/Thomas-Zeliff.jpg';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function App() {
	useEffect(() => {
		Aos.init({ duration: 700 });
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}
	return (
		<div id="testimonial" className="testimonial">
			<div className="testimonials">
				<div className="header__testimonial">
					<h1 className="testimonial_header">Testimonial</h1>
				</div>

				<div className="card" data-aos="fade-right">
					<div className="layer-left">
						<FaQuoteLeft />
					</div>
					<div className="content">
						<p>
							{truncate(
								`Moe is a truley exceptional engineer from both technical
        and soft skills point of view. He is the rising star
        that will transform the code-base and culture in your
        company for better. He has great attention to details
        and the aptitude for technical excellence which makes
        him a great fit for mission critical projects.`
							)}
						</p>
						<div className="layer-right">
							<FaQuoteRight />
						</div>
						<div className="image">
							<img alt="place holder" src={Aidin} />
						</div>
						<div className="details">
							<h2>
								Aidin Sadighi
								<br />
								<span>Senior Software Engineer III (L6) @ Amazon</span>
							</h2>
						</div>
					</div>
				</div>

				<div className="card" data-aos="fade-left">
					<div className="layer-left">
						<FaQuoteLeft />
					</div>
					<div className="content">
						<p>
							{truncate(
								`Mohammad is dedicated to doing the best he can for every
        customer. He works tirelessly to develop the solutions
        our customers need and ensure their web design needs are
        met. He quickly learned our product and systems, moving
        on to a full workload of tickets faster than most new
        agents.`
							)}
						</p>
						<div className="layer-right">
							<FaQuoteRight />
						</div>
						<div className="image">
							<img alt="place holder" src={Thomas} />
						</div>
						<div className="details">
							<h2>
								Thomas Zeliff
								<br />
								<span>Vice President of Operations at ExakTime</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
