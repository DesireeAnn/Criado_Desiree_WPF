/* Desiree Criado
11/20/14
Functions - Wacky
 */
//Calculate how many cups of coffee I will drink today
//Ask if I need to print shirts
var shirts = prompt("Do I have to print shirts today? Enter 1 for yes or 0 for no.");
//Print result to console
console.log(shirts);
//Ask if I have a serving shift
var serve = prompt("Do I have to serve at the restaurant today? Enter 1 for yes or 0 for no.");
//Print result to console
console.log(serve);
//Ask how many hours of homework I plan to do today
var homework = prompt("How many hours of homework do I have today?");
//Print to console
console.log(homework);
//If I have more than 0 hours of homework and less than 3 hours of homework, I'll have 1 cup of coffee
if(homework > 0 && homework < 3){
    homework = 1
//If I have 3 or more hours of hmework, I will have 2 cups of coffee
}else if(homework >= 3){
    homework = 2
}
//Define total cups function
function totalCups(){
    var cups = (Number(shirts) + Number(serve) + Number(homework));
    console.log("I will drink " + cups + " cups of coffee today.");
    alert("I will drink " + cups + " cups of coffee today.");
}
//Function Call
totalCups();
