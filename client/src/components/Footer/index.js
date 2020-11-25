import React from 'react';
import './style.css';

const Footer = () => {
	return (
		<>
			<footer class="new_footer_area bg_color">
				<div class="new_footer_top">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-6">
								<div
									class="f_widget social-widget pl_70 wow fadeInLeft"
									data-wow-delay="0.8s"
								>
									<div class="f_social_icon">
										<a href="#" class="fab fa-facebook"></a>
										<a href="#" class="fab fa-twitter"></a>
										<a href="#" class="fab fa-linkedin"></a>
										<a href="#" class="fab fa-pinterest"></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="footer_bg">
						<div class="footer_bg_one"></div>
						<div class="footer_bg_two"></div>
					</div>
				</div>
				<div class="footer_bottom">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-6 col-sm-7">
								<p class="mb-0 f_400">
									© cakecounter Inc.. 2019 All rights reserved.
								</p>
							</div>
							<div class="col-lg-6 col-sm-5 text-right">
								<p>
									Made with <i class="icon_heart"></i> in{' '}
									<a href="#">CakeCounter</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
