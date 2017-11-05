var config = new AWS.Config({
    accessKeyId: config.key, secretAccessKey: config.secret, region: config.s3region
});
const urlParams = new URLSearchParams(window.location.search);

var s3 = new AWS.S3(config);
const sourceBucket = "setup.santahacks.com";
const sourceKey = urlParams.get("org") + ".json"; // Filename. Need to get from browser
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
      if(b.Question1) {
        $(question1).text(""+(b.Question1));
      }
      else{
          $(form1).text("");
      }
      if(b.Question2) {
        $(question2).text(""+(b.Question2));
      }
      else{
          $(form2).text("");
      }
      if(b.Question3) {
        $(question3).text(""+(b.Question3));
      }
      else{
          $(form3).text("");
      }
      $(question3).text(""+(b.Question3));
      if(b.Question4) {
        $(question4).text(""+(b.Question4));
      }
      else{
          $(form4).text("");
      }
      if(b.Question5) {
        $(question5).text(""+(b.Question5));
      }
      else{
          $(form5).text("");
      }
      if(b.Question6) {
        $(question6).text(""+(b.Question6));
      }
      else{
          $(form6).text("");
      }
      if(b.Question7) {
        $(question7).text(""+(b.Question7));
      }
      else{
          $(form7).text("");
      }
      if(b.Question8) {
        $(question8).text(""+(b.Question8));
      }
      else{
          $(form8).text("");
      }
      if(b.Question9) {
        $(question9).text(""+(b.Question9));
      }
      else{
          $(form9).text("");
      }
      if(b.Question10) {
        $(question10).text(""+(b.Question10));
      }
      else{
          $(form10).text("");
      }

      }// successful response
});
