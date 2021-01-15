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

				<Alert show={showDanger} variant="danger" className="alert">
					<Alert.Heading>Error message:</Alert.Heading>
					<p>There are errors on the form. Please fix them before continuing</p>
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
