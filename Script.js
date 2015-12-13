/*
function init()
{
var target = document.getElementById("call-t-action");
alert(target.nodeName);
}
document.addEventListener( "DOMContentLoaded" , init , false ) ; 
*/


/*to display the DOM element tag name we use nodeName, an alert box will pop up*/
/*to check if an element is not null use below conditional statement.*/

/*
function init()
{
  var target = document.getElementById("call-to-action");
  if(target != null)
  {
    alert(target.nodeName);	
  }
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;
*/
/*hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/
/*
function init()
{
  var elementArray = [];

  if (typeof document.all != "undefined")
  {
    elementArray = document.all;
  }
  else
  {
    elementArray = document.getElementsByTagName("*");
  } 
  
  {
   alert (elementArray.nodeName);
  }
}  

 document.addEventListener( "DOMContentLoaded" , init , false ) ;

*/

var j = document.all.length;
for(var i = 0; i < j; i++){
   alert("Page element["+i+"] has tagName:"+document.all(i).tagName);