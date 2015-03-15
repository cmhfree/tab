function setTab(ID,NAME,n){

var menu=document.getElementById(ID).getElementsByTagName("li");  
var showdiv=document.getElementById(NAME).getElementsByTagName("div");  

for(i=0;i<menu.length;i++)
{
   menu[i].className=i==n?"now":""; 
   showdiv[i].style.display=i==n?"block":"none"; 
}
}