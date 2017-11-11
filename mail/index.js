var aws = require('aws-sdk');
var ses = new aws.SES({
    region: 'us-east-1'
});

exports.handler = function (event, context) {
    console.log("Incoming: ", event);

    var orgTemplate = {
            "TemplateName": "orgCreationTemplate",
            "SubjectPart": "{{name}}, your secret santa match is here!",
            "TextPart": "Dear {{name}},\r\nYour favorite animal is {{favoriteanimal}}.",
            "HtmlPart": "<h1>Thanks for signing up to be a part of the <strong>CodeRED</strong> Secret Santa!</h1><br>" +
                "Your organization is: {{orgname}}" +
                "More information will go here<br><br><br>" +
                "<h2>Click below to begin matching!!</h2><br>" +
                "<strong>Click here!</strong>"
    }

    ses.createTemplate(orgTemplate); // fix this

    var eParams = {
        "Source": "alerts@santahacks.com",
        "Template": orgTemplate.TemplateName, // fix this
        "Destination": {
            "ToAddresses": ["jordan@barnfield.me"]
        },
        "TemplateData": "{ \"name\":\"Jordan\", \"favoriteanimal\": \"zebra\", \"orgname\":\"UT Disasters\" }",
    }

    console.log('===SENDING EMAIL===');

    var email = ses.sendTemplatedEmail(eParams, function (err, data) {
        if (err)
            console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);


            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(event);

        }
    });

};