var sourceBucket = "responses.santahacks.com";
var sourceType = "application/json";
var urlParams = new URLSearchParams(window.location.search);
var sourceKey = urlParams.get("orgname");
var s3 = new AWS.S3(config);

var params = {
    Bucket: sourceBucket,
    Key: sourceKey,
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
        params.Key = params.Key.concat("/" + document.getElementsByName('Name')[0].value);
        params.Key = params.Key.concat(".json");
        params.Key = params.Key.replace(/ /g, '_');
        var s3 = new AWS.S3(config);
            s3.putObject(params, function (err, data) {
                if(err)
                    console.log(err, err.stack);
                else
                    console.log("Success!!");
            });
            setTimeout(function(){
                window.location.href="submitted.html?orgname=" + sourceKey;    
              }, 1000);

        return false;
    });
});