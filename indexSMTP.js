//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
require('dotenv').config();
var nodemailer = require('nodemailer');
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var transporter = nodemailer.createTransport({
    host: 'smtp.mailer91.com',
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
        user: process.env.SMTP_USERNAME, // Your email address
        pass: process.env.SMTP_PASSWORD // Use your password or app password
    }
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
const mailOptions = {
    from: 'no-reply@app.code180.in', // sender address
    to: 'joydeepmobile.2014@gmail.com', // list of receivers
    subject: 'Test', // Subject line
    html: '<p>Test</p>' // plain text body
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info)
    };
});