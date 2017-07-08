var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jldoucette.work@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'jldoucette.work@gmail.com',
  to: 'jonathan@doucette.com',
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