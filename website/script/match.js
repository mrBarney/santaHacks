/* The following example list two objects in a bucket. */
var sourceBucket = "responses.santahacks.com";

var params = {
    Bucket: sourceBucket,
   };

   s3.listObjects(params, function(err, data) {
     if(err) 
        console.log(err, err.stack); // an error occurred
     else     
        console.log(data);           // successful response
     
   });