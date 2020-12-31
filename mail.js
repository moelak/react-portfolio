const mailer = require('nodemailer');
const { Hello } = require('./hello_template');
const { Thanks } = require('./thanks_template');

const getEmailData = (name, email, subject, textarea, template) => {
	let data = null;

	switch (template) {
		case 'hello':
			data = {
				from: `${email}`,
				to: `m.laknahour1990@gmail.com`,
				subject: `${subject}`,
				html: Hello(textarea, subject),
			};
			break;

		case 'thanks':
			data = {
				from: 'Moe Laknahour <m.laknahour1990@gmail.com>',
				to: `${email}`,
				subject: `Hello ${name}`,
				html: Thanks(name),
			};
			break;
		default:
			data;
	}
	return data;
};

const sendEmail = (name, email, subject, textarea, type) => {
	const smtpTransport = mailer.createTransport({
		service: 'Mailgun',
		auth: {
			user: process.env.MAILGUN_SMTP_USERNAME,
			pass: process.env.MAILGUN_SMTP_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mail = getEmailData(name, email, subject, textarea, type);

	smtpTransport.sendMail(mail, function (error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log(' email sent successfully');
		}
		smtpTransport.close();
	});
};

module.exports = { sendEmail };
