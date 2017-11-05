var config = new AWS.Config({
  accessKeyId: config.key,
  secretAccessKey: config.secret,
  region: config.s3region
});

var s3 = new AWS.S3(config);
const sourceBucket = "setup.santahacks.com";
const sourceType = "application/json";

var params = {
  Bucket: sourceBucket,
  /* required */
  Key: sourceKey,
  /* required */
  ResponseContentType: sourceType,
};

// Parse into json
$.fn.serializeObject = function () {
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
    var json = text(JSON.stringify($('form').serializeObject()));
    s3.putObject({
      Bucket: 'setup.santahacks.com',
      Key: 'test.json',
      Body: json,
      ContentType: "application/json"
    }, function (err, data) {
      console.log(JSON.stringify(err) + " " + JSON.stringify(data));
    });
    return false;
  });
});
