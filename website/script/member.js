var config = new AWS.Config({
    accessKeyId: config.key, secretAccessKey: config.secret, region: config.s3region
});

var s3 = new AWS.S3(config);
const sourceBucket = "setup.santahacks.com";
const sourceKey = "UTDALLAS.json"; // Filename. Need to get from browser
const sourceType = "application/json";

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
    else{

      var org = $("#ORG");
      var a = new TextDecoder("utf-8").decode(data.Body);
      var b = JSON.parse(a);

      console.log(new TextDecoder("utf-8").decode(data.Body));

      $(org).text(""+(b.Organization));







      }// successful response
});
