const sourceBucket = "setup.santahacks.com";
const sourceType = "application/json";
var filename;
var getParams = {
  Bucket: sourceBucket,
  Key: 'default.json',
};
var putParams = {
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
    putParams.Body = json;
    filename = document.getElementsByName('Organization')[0].value;
    filename = filename.concat(".json");
    filename = filename.replace(/ /g, '_');
    getParams.Key = filename;
    putParams.Key = filename;
    s3.getObject(getParams, function (err, data) {
      if (err) { // orgname doesn't already exist
        s3.putObject(putParams, function (err, data) {
          console.log(JSON.stringify(err) + " " + JSON.stringify(data));
        });
        setTimeout(function () {
          window.location.href = "signup.html?orgname=" + document.getElementsByName('Organization')[0].value.replace(/ /g, '_');
        }, 1000);
      } else { // orgname exists
        alert("Organization name already exists");
        return;
      } // successful response
    });
    return false;
  });
});