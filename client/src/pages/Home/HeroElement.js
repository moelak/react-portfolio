import styled from 'styled-components';

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	position: reletive;
	z-index: 1;

	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	background: #232a34;
	object-fit: cover;
	-o-object-fit: cover;
	width: 100vw;
	height: 100vh;

	top: 0;
	left: 0;
`;

export const Herotext = styled.div`
	z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 8px 24px;
    display:flex;
    flex-direction:column;
	align-items: center;
	justify-content: center;
	bottom:6%;
	height: 100%;
	
`;

export const HeroH1 = styled.h1`
	color: white;
	font-size: 46px;
	text-align: center;
	font-weight: 700;

	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */

	@media screen and (max-width: 780px) {
		font-size: 34px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: white;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	letter-spacing: 1.7px;

	user-select: none; /* supported by Chrome and Opera */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */

	@media screen and (max-width: 780px) {
		font-size: 22px;
		width: 90%;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
		width: 90%;
	}
`;
