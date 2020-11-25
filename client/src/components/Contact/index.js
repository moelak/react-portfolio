import React, { useState } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
	MDBInput,
} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Iframe from 'react-iframe';
import './style.css';
import axios from 'axios';

const FormPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [textarea, setTextarea] = useState('');

	const handleClick = event => {
		event.preventDefault();

		if (event.target.id === 'name') {
			setName(event.target.value);
		} else if (event.target.id === 'email') {
			setEmail(event.target.value);
		} else if (event.target.id === 'subject') {
			setSubject(event.target.value);
		} else {
			setTextarea(event.target.value);
		}
	};

	const handleSubmit = event => {
		event.preventDefault();

		const dataToSuubmite = {
			name,
			email,
			subject,
			textarea,
		};

		axios.post('api/sendMail', dataToSuubmite);
	};

	return (
		<div class="contact" id="contact">
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6" className="contact-Form">
						<form onSubmit={handleSubmit}>
							<h3 className="h3 text-center mb-4">Contact Me</h3>
							<div className="grey-text">
								<MDBInput
									id="name"
									label="Your name"
									icon="user"
									group
									type="text"
									validate
									error="wrong"
									success="right"
									value={name}
									onChange={handleClick}
								/>
								<MDBInput
									id="email"
									label="Your email"
									icon="envelope"
									group
									type="email"
									validate
									error="wrong"
									success="right"
									value={email}
									onChange={handleClick}
								/>
								<MDBInput
									id="subject"
									label="Subject"
									icon="tag"
									group
									type="text"
									validate
									error="wrong"
									success="right"
									value={subject}
									onChange={handleClick}
								/>
								<MDBInput
									id="textarea"
									type="textarea"
									rows="2"
									label="Your message"
									icon="pencil-alt"
									value={textarea}
									onChange={handleClick}
								/>
							</div>
							<div className="text-center">
								<MDBBtn outline color="secondary" onClick={handleSubmit}>
									Send
									<MDBIcon far icon="paper-plane" className="ml-1" />
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};

export default FormPage;
