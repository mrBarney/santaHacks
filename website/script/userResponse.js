var sourceBucket = "responses.santahacks.com";
var sourceType = "application/json";
var urlParams = new URLSearchParams(window.location.search);
var filename = urlParams.get("orgname");
var s3 = new AWS.S3(config);
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
        filename = filename.concat("/" + document.getElementsByName('Name')[0].value);
        filename = filename.concat(".json");
        filename = filename.replace(/ /g, '_');
        putParams.Key = filename;
        getParams.Key = filename;
        s3.getObject(getParams, function (err, data) {
            if (err) { // name doesn't already exist
                s3.putObject(putParams, function (err, data) {
                    if (err)
                        console.log(err, err.stack);
                    else
                        console.log("Success!!");
                });
                setTimeout(function () {
                    window.location.href = "submitted.html?orgname=" + urlParams.get("orgname");
                }, 1000);
            } else { // name exists
                alert("Name already exists. Try using first, last, and middle to avoid confusion.");
                filename = urlParams.get("orgname");
                return;
            } // successful response
        });
        return false;
    });
});