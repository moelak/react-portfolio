import styled from 'styled-components';

export const AboutContainer = styled.div`
	color: white;
	background: black;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const AboutWraper = styled.div`
	display: grid;
	z-index: 1;
	height: auto;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const AboutRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: 'col2 col1';

	@media screen and (max-width: 768px) {
		grid-template-areas: 'col2' 'col1';
	}
`;

export const AboutColumn1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const AboutColumn2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const TextWraper = styled.div`
	max-width: 540px;
	padding-top: 100%;
	padding-bottom: 60px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: black;
	text-align: center;
`;

export const Text = styled.p`
max-width:340px
	margin-bottom: 35px;
	font-size: 16px;
	line-height: 1.6;
	letter-spacing: 2px;
	color: black;
	text-align: center;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
