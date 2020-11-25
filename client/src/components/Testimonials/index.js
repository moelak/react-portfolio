import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Import Swiper styles
import 'swiper/swiper.scss';

import './style.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
	{
		id: 1,
		name: 'Aidin Sadighi',
		jobTitle: 'Senior Software Engineer III (L6) @ Amazon AWS',
		testimonial: `Moe is a truley exceptional engineer from both technical
        and soft skills point of view. He is the rising star
        that will transform the code-base and culture in your
        company for better. He has great attention to details
        and the aptitude for technical excellence which makes
        him a great fit for mission critical projects.`,
		image: './assets/Aidin-Sadighi.jpg',
		readMore: false,
	},
	{
		id: 2,
		name: 'Thomas Zeliff',
		jobTitle: 'Vice President of Operations at ExakTime',
		testimonial: `Mohammad is dedicated to doing the best he can for every
        customer. He works tirelessly to develop the solutions
        our customers need and ensure their web design needs are
        met. He quickly learned our product and systems, moving
        on to a full workload of tickets faster than most new
        agents.`,
		image: './assets/Thomas-Zeliff.jpg',
		readMore: true,
	},
];

function App() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div id="testimonial">
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				data-aos="zoom-out"
			>
				{data.map(user => (
					<SwiperSlide key={user.id} className="slide">
						<div class="testimonials">
							<div class="card">
								<div class="layer-left">
									<FaQuoteLeft />
								</div>
								<div class="content">
									<p>
										{user.readMore
											? user.testimonial + ' Read more...'
											: user.testimonial}
									</p>
									<div class="layer-right">
										<FaQuoteRight />
									</div>
									<div class="image">
										<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png" />
									</div>
									<div class="details">
										<h2>
											{user.name}
											<br />
											<span>{user.jobTitle}</span>
										</h2>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default App;
