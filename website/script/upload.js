var config = new AWS.Config({
  accessKeyId: config.key,
  secretAccessKey: config.secret,
  region: config.s3region
});

var s3 = new AWS.S3(config);
const sourceBucket = "setup.santahacks.com";
const sourceType = "application/json";

AWS.config.update({
  region: config.s3region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: config.poolID
  })
});

var params = {
  Bucket: sourceBucket,
  Key: 'default.json',
  Body: "",
  ContentType: sourceType,
};

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$(function () {
  $('form').submit(function () {
    var json = JSON.stringify($('form').serializeObject());
    params.Body = json;
    params.Key = document.getElementsByName('Organization')[0].value;
    params.Key = params.Key.concat(".json");   
    s3.putObject(params, function (err, data) {
      console.log(JSON.stringify(err) + " " + JSON.stringify(data));
    });
    return false;
  });
});
