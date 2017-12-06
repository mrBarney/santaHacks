var json;
var email;
var organizationName = "{ \"Organization\":";
var getParams = {
    Bucket: 'setup.santahacks.com',
    Key: 'EmailTest2.json',
};

exports.handler = function (event, context) {
    s3.getObject(getParams, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            json = data.Body.toString('utf-8');
            json = JSON.parse(json);
            email = JSON.stringify(json.email);
            email = email.replace(/['"]+/g, '');
            console.log(email);
            json = organizationName + JSON.stringify(json.Organization) + "}";
            console.log(json);
        }
    });

    setTimeout(function () {
        var eParams = {
            "Source": "alerts@santahacks.com",
            "Template": "updatedOrgTemplate",
            "Destination": {
                "ToAddresses": [email]
            },
            "TemplateData": json,
        }

        // Create the promise and SES service object
        var sendPromise = ses.sendTemplatedEmail(eParams).promise();

        sendPromise.then(
            function (data) {
                console.log(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
            });
    }, 1000);
};