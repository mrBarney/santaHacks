var urlParams = new URLSearchParams(window.location.search);
var setupBucket = "setup.santahacks.com";
var sourceKey = urlParams.get("orgname") + ".json"; // Filename. Need to get from browser
var sourceType = "application/json";
var params = {
    Bucket: setupBucket,
    Key: sourceKey,
    ResponseContentType: sourceType,
};
get_short_url(window.location.href, "jordanbarnfield", "R_8524b64cedd6401b8a81e157fe59287f");

window.onload = load;

s3.getObject(params, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else {
        var org = $("#ORG");
        var a = new TextDecoder("utf-8").decode(data.Body);
        var b = JSON.parse(a);

        console.log(new TextDecoder("utf-8").decode(data.Body));

        $(org).text("" + (b.Organization));
        $(message0).text("" + (b.Message));
        if (b.Question1) {
            $(question1).text("" + (b.Question1));
        } else {
            $(form1).text("");
        }
        if (b.Question2) {
            $(question2).text("" + (b.Question2));
        } else {
            $(form2).text("");
        }
        if (b.Question3) {
            $(question3).text("" + (b.Question3));
        } else {
            $(form3).text("");
        }
        $(question3).text("" + (b.Question3));
        if (b.Question4) {
            $(question4).text("" + (b.Question4));
        } else {
            $(form4).text("");
        }
        if (b.Question5) {
            $(question5).text("" + (b.Question5));
        } else {
            $(form5).text("");
        }
        if (b.Question6) {
            $(question6).text("" + (b.Question6));
        } else {
            $(form6).text("");
        }
        if (b.Question7) {
            $(question7).text("" + (b.Question7));
        } else {
            $(form7).text("");
        }
        if (b.Question8) {
            $(question8).text("" + (b.Question8));
        } else {
            $(form8).text("");
        }
        if (b.Question9) {
            $(question9).text("" + (b.Question9));
        } else {
            $(form9).text("");
        }
        if (b.Question10) {
            $(question10).text("" + (b.Question10));
        } else {
            $(form10).text("");
        }

    } // successful response
});

// URL Shortner
function get_short_url(long_url, login, api_key) {
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?", {
            "format": "json",
            "apiKey": api_key,
            "login": login,
            "longUrl": long_url
        },
        function(response) {
            if(response.data.url != null)
                document.getElementById("link").innerHTML = response.id;
            else
                document.getElementById("link").innerHTML = window.location.href;
        }
    );
}
