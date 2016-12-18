var count = 30;
var counter = setInterval(timer,1000);

function timer (){
	count -= 1
	if (count===0){
	clearInterval(counter);
	alert("Time's up!!");
	}

	$("#display").html(count);

};


//this should appear after done button has been clicked
$("#done").click(function() {             

if (!$("input[name=q1]:checked").val() ||            
!$("input[name=q2]:checked").val() ||            
!$("input[name=q3]:checked").val() ||            
!$("input[name=q4]:checked").val() ||            
!$("input[name=q5]:checked").val()                    
){           
alert("You're not done yet!");        
}        

else {            
var part1name = "1";            
var part2name = "2";            
var part3name = "3";            
var part4name = "4";            
var part5name = "5";
var part6name = "None";                      

var part1 = ($("input[name=q1]:checked").val() != "d"); 
           
var part2 = ($("input[name=q2]:checked").val() != "c");  

var part3 = ($("input[name=q3]:checked").val() != "b");  

var part4 = ($("input[name=q4]:checked").val() != "a");  

var part5 = ($("input[name=q5]:checked").val() != "c");  

var part6 = (!part1 && !part2 && !part3 && !part4 && !part5 ); var parts = [];                        

if (part1) { parts.push(part1name) };            
if (part2) { parts.push(part2name) };            
if (part3) { parts.push(part3name) };            
if (part4) { parts.push(part4name) };            
if (part5) { parts.push(part5name) };                       
if (part6) { parts.push(part6name) };                        



if (part1) { $("#part1").show("slow"); };            
if (part2) { $("#part2").show("slow"); };            
if (part3) { $("#part3").show("slow"); };            
if (part4) { $("#part4").show("slow"); };            
if (part5) { $("#part5").show("slow"); };                       
if (part6) { $("#part6").show("slow"); };
{ $("#closing").show("slow"); };
}
});
