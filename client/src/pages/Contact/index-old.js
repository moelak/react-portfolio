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
import './style.css';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import validator from 'validator';

const FormPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [textarea, setTextarea] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [showDanger, setShowDanger] = useState(false);
	const [activeBtn, setActiveBtn] = useState(true);

	const handleClick = event => {
		event.preventDefault();

		if (name !== '' && email !== '' && subject !== '' && textarea !== '') {
			setActiveBtn(false);
		} else {
			console.log('iam here');
			setActiveBtn(true);
		}

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
		event.target.className += ' was-validated';

		setName('');
		setEmail('');
		setSubject('');
		setTextarea('');
		setActiveBtn(true);

		const dataToSuubmite = {
			name,
			email,
			subject,
			textarea,
		};

		if (
			dataToSuubmite.name !== '' &&
			dataToSuubmite.email !== '' &&
			dataToSuubmite.subject !== '' &&
			dataToSuubmite.textarea !== ''
		) {
			setShowSuccess(true);

			setTimeout(() => {
				setShowSuccess(false);
			}, 4000);

			axios.post('api/sendMail', dataToSuubmite);
		} else {
			setShowDanger(true);

			setTimeout(() => {
				setShowDanger(false);
			}, 4000);
		}
	};

	return (
		<div className="contact" id="contact">
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6" className="contact-Form">
						<form onSubmit={handleSubmit} className="needs-validation">
							<h3 className="h3 text-center mb-4">Contact Me</h3>

							<Alert show={showSuccess} variant="success">
								<Alert.Heading>Success message:</Alert.Heading>
								<p>
									Your message has been sent. I will get back to you as soon as
									possible!
								</p>
							</Alert>

							<Alert show={showDanger} variant="danger">
								<Alert.Heading>Error message:</Alert.Heading>
								<p>
									There are errors on the form. Please fix them before
									continuing
								</p>
							</Alert>
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
									required
								>
									<div className="valid-feedback">Looks good!</div>
								</MDBInput>
								<MDBInput
									id="email"
									label="Your email"
									icon="envelope"
									type="email"
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
									required
								/>
								<MDBInput
									id="textarea"
									type="textarea"
									rows="4"
									label="Your message"
									icon="pencil-alt"
									value={textarea}
									onChange={handleClick}
									required
								/>
							</div>
							<div className="text-center">
								<MDBBtn
									outline
									color="secondary"
									type="submit"
									onClick={handleSubmit}
									disabled={activeBtn}
								>
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
