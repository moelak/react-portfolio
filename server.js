const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mail');

app.post('/api/sendMail', (req, res) => {
	console.log(req.body, '------------------');
	sendEmail(req.body.email, req.body.name, 'hello');
});

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
