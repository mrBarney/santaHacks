$(document).ready(function()
{
   var limit = 20;
   var n = 5;
   var addB = $(".addB");
   var questions = $(".Que");

   $( "#datepicker" ).datepicker();

   $(addB).click(function(e)
 {
   if(n<limit){
     $(questions).append("<div><label>Question "+n+": </label> <input type=\"text\" name=\"questions"+n+"\" class=\"questions\"> <a href=\"#\" class=\"rem\">X</a><br><br></div>");
    n++;
    }
 });

 $(questions).on("click", ".rem", function(e){
   if(n>3){
   e.preventDefault();
   $(this).parent('div').remove();
   n--;
 }
 });



});
