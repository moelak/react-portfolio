const mailer = require('nodemailer');
const { Hello } = require('./hello_template');
const { Thanks } = require('./thanks_template');

const getEmailData = (to, name, template) => {
	let data = null;

	switch (template) {
		case 'hello':
			data = {
				from: 'John Ahn <jaewon@gmail.com>',
				to,
				subject: `Hello ${name}`,
				html: Hello(),
			};
			break;

		case 'thanks':
			data = {
				from: 'John Ahn <jaewon@gmail.com>',
				to,
				subject: `Hello ${name}`,
				html: Thanks(),
			};
			break;
		default:
			data;
	}
	return data;
};

const sendEmail = (to, name, type) => {
	const smtpTransport = mailer.createTransport({
		service: 'Mailgun',
		auth: {
			user: 'postmaster@sandbox70c99d0ebf1e4f8086d8d14621768d0e.mailgun.org',
			pass: '52602b0f87d345eaa962d430b798b0ce-0d2e38f7-119294ca',
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mail = getEmailData(to, name, type);

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
