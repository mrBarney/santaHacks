$(document).ready(function()
{
   var n = 4;
   var addB = $(".addB");
   var questions = $(".questions");
   $(addB).click(function(e)
 {
    $(questions).append("Question "+n+": <input type=\"text\" name=\"question"+n+"\"><br>");
    n++;
 });

// add remove field function

});
