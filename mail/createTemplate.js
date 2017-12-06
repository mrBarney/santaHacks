var aws = require('aws-sdk');
var ses = new aws.SES({
    region: 'us-east-1',
    apiVersion: '2010-12-01',
});
var orgTemplate = {
    Template: {
        TemplateName: "updatedOrgTemplate",
        SubjectPart: "Thanks for using Santa Hacks!",
        TextPart: "\r\nYou're good to go!",
        HtmlPart: "<h1>Thanks for signing up! Share the link below with your organization. Once everyone is signed up, press the button below to being the matching process!</h1><br>" +
            "Your organization is: {{Organization}}<br>" +
            "Share this link: <br>" +
            "More information will go here<br><br><br>" +
            "<h2>Click below to begin matching!!</h2><br>" +
            "<a href=\"google.com\"><strong>Click here!</strong></a>"
    }
}

ses.createTemplate(orgTemplate, function (err, data) {
    if (err) console.log(err, err.stack);
});