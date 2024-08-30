var nodemailer = require('nodemailer');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchitbajaj2003@gmail.com',
    pass: 'Sandy@2003'
  }
});

var mailOptions = {
  from: 'sanchitbajaj2003@gmail.com',
  to: 'sanchitbajaj2003@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});