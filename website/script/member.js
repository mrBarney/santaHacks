var config = new AWS.Config({
    accessKeyId: config.key, secretAccessKey: config.secret, region: config.s3region
});

var s3 = new AWS.S3(config);
const sourceBucket = "setup.santahacks.com";
const sourceType = "application/json";
const urlParams = new URLSearchParams(window.location.search);
const sourceKey = urlParams.get("org") + ".json";

AWS.config.update({
    region: config.s3region,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: config.poolID
    })
});

var params = {
    Bucket: sourceBucket, /* required */
    Key: sourceKey, /* required */
    ResponseContentType: sourceType,
};

s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else
        console.log(new TextDecoder("utf-8").decode(data.Body));           // successful response
});