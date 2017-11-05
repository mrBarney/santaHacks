// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'cooperfle@gmail.com',
        from: 'alerts@santahacks.com',
        subject: 'Your Secret Santa match is here!',
        text: 'Thanks for signing up to be a part of the CodeRED Secret Santa!\n' +
        'Your match is: Cooper Le!\n' +
        'Her address is: 800 W Campbell Rd Richardson, TX 75080\n' +
        'Vim or Emacs?: Vim' +
        'PC or Mac?: Mac' +
        'PC or Console?: PC' +
        'What is your favorite programming language?: Java',
        html: '<h1>Thanks for signing up to be a part of the <strong>CodeRED</strong> Secret Santa!</h1><br>' +
            'Your match is: <strong>Cooper Le</strong>!<br>' +
            'Her address is: 800 W Campbell Rd Richardson, TX 75080<br>' +
            'Vim or Emacs?: Vim<br>' +
            'PC or Mac?: Mac<br>' +
            'PC or Console?: PC<br>' +
            'What is your favorite programming language?: Java<br><br><br>' + 
            '<h2>Message from your organization!</h2><br>' +
            'Thanks for hacking with us at CodeRED! We look forward to seeing you next year. Remember, <strong>$50 limit</strong> on all Secret Santa gifts!',
    };
    sgMail.send(msg);