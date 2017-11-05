// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');


exports.handler = function(event, context, callback) {
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: event.toEmail,
        from: 'alerts@santahacks.com',
        subject: 'Your Secret Santa match is here!',
        text: event.message,
        html: event.messageHtml,
    };
    sgMail.send(msg);
    // Use callback() and return information to the caller.  
    callback(null,msg,msg);
 }