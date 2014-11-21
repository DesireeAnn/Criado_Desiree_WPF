/* Desiree Criado
11/20/14
Functions - Wacky
 */
//Calculate how many cups of coffee I will drink today

var shirts = prompt("Do I have to print shirts today? Enter 1 for yes or 0 for no.");

console.log(shirts);

var serve = prompt("Do I have to serve at the restaurant today? Enter 1 for yes or 0 for no.");

console.log(serve);

var homework = prompt("How many hours of homework do I have today?");

console.log(homework);

if(homework < 3){
    homework = 1
}else if(homework >= 3){
    homework = 2
}

function totalCups(){
    var cups = (Number(shirts) + Number(serve) + Number(homework));
    console.log("I will drink " + cups + " cups of coffee today.");
    alert("I will drink " + cups + " cups of coffee today.");
}

totalCups();
