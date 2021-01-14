const express = require('express');
const session = require('express-session');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
	// Exprees will serve up production assets
	app.use(express.static('client/build'));

	// Express serve up index.html file if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const { sendEmail } = require('./mail');

app.post('/api/sendMail', (req, res) => {
	sendEmail(
		req.body.name,
		req.body.email,
		req.body.subject,
		req.body.textarea,
		'hello'
	);
	sendEmail(
		req.body.name,
		req.body.email,
		req.body.subject,
		req.body.textarea,
		'thanks'
	);
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
