$(document).ready(function()
{
   var limit = 20;
   var n = 4;
   var addB = $(".addB");
   var questions = $(".questions");

   $( "#datepicker" ).datepicker();

   $(addB).click(function(e)
 {
   if(n<limit){
     $(questions).append("<div>Question "+n+": <input type=\"text\" name=\"question"+n+"\"> <a href=\"#\" class=\"rem\">X</a><br></div>");
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
