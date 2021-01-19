import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [textarea, setTextarea] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [showDanger, setShowDanger] = useState(false);
	const [activeBtn, setActiveBtn] = useState(true);
	const [emailVerifcation, setemailVerifcation] = useState(false);
	const [emailConfirmation, setemailConfirmation] = useState(false);

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
			console.log('hereeeee');
			let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			let regConfirmation = /^\w+([\.-]?\w+)*@gmail+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (reg.test(dataToSuubmite.email) === false) {
				console.log('Email is Not Correct');
				setemailVerifcation(true);
				setTimeout(() => {
					setemailVerifcation(false);
				}, 12000);
				return false;
			} else if (regConfirmation.test(dataToSuubmite.email) === false) {
				setemailConfirmation(true);
				setTimeout(() => {
					setemailConfirmation(false);
				}, 12000);
			} else {
				console.log('Email could be Correct');
				setemailVerifcation(false);
			}

			setShowSuccess(true);
			console.log('dataToSuubmite.email', dataToSuubmite.email);
			setTimeout(() => {
				setShowSuccess(false);
			}, 4000);

			axios.post('api/sendMail', dataToSuubmite);
		} else {
			console.log('hereeeee');

			setShowDanger(true);

			setTimeout(() => {
				setShowDanger(false);
			}, 4000);
		}
	};

	return (
		<div id="contact" className="container contact-form">
			<div className="contact-image">
				<img
					src="https://image.ibb.co/kUagtU/rocket_contact.png"
					alt="rocket_contact"
				/>
			</div>
			<form method="post">
				<h2>Contact Me</h2>
				<Alert show={showSuccess} variant="success" className="alert">
					<Alert.Heading>Success message:</Alert.Heading>
					<p>
						Your message has been sent. I will get back to you as soon as
						possible!
					</p>
				</Alert>

				<Alert show={emailConfirmation} variant="warning" className="alert">
					<Alert.Heading>Notification:</Alert.Heading>
					<p>
						If you never revicved a confimartion email in less than a minute,
						then please contact me at{' '}
						<a href="mailto:m.laknahour1990@gmail.com">
							m.laknahour1990@gmail.com
						</a>{' '}
					</p>
				</Alert>

				<Alert show={emailVerifcation} variant="danger" className="alert">
					<Alert.Heading>Error message:</Alert.Heading>
					<p>Please make sure to provide a valid email.</p>
				</Alert>

				<Alert show={showDanger} variant="danger" className="alert">
					<Alert.Heading>Error message:</Alert.Heading>
					<p>All fields are required. Please fix them before continuing.</p>
				</Alert>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input
								id="name"
								label="Your name"
								type="text"
								name="txtName"
								className="form-control"
								placeholder="Your Name..."
								value={name}
								onChange={handleClick}
								required
							/>
						</div>
						<div className="form-group">
							<input
								id="email"
								label="Your email"
								type="email"
								name="txtEmail"
								className="form-control"
								placeholder="Your Email..."
								value={email}
								onChange={handleClick}
							/>
						</div>
						<div className="form-group">
							<input
								id="subject"
								label="Subject"
								type="text"
								name="txtPhone"
								className="form-control"
								placeholder="Subject..."
								value={subject}
								onChange={handleClick}
								required
							/>
						</div>

						<div className="form-group">
							<textarea
								id="textarea"
								type="textarea"
								name="txtMsg"
								className="form-control"
								placeholder="Your Message..."
								rows={6}
								value={textarea}
								onChange={handleClick}
								required
							></textarea>
						</div>
						<div className="form-group btn-submit">
							<button
								type="submit"
								className="btnContact"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormPage;
