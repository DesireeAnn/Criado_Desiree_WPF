/* Desiree Criado
11/20/14
Functions - Personal
 */
//How many seats are reserved for your party at my wedding?

//Greet user
alert("We can't wait to share our special day with our friends and family!");

//Prompt whether or not guest will be bringing a date
var guest = prompt("Will you be bringing a date?");

if(guest = "no"){
    guest = 0;
}else if(guest = "yes"){
    guest = 1;
}

//Print to console
console.log(guest);


//Prompt whether or not the guest has children
var child = prompt("How many children do you have?");

//Print to console
console.log(child);

//Age verification for children
var age = prompt("How many children are 18 or over?");

//Underage Child alert
if(age == 0) {
    alert("I'm sorry, but this event is for adults only. We apologize for the inconvenience.");
}
if(age > 0){
    console.log(age);
}

var calcRes = function(age, child, guest) {
    var seats = (age * child) ++ guest ++ 1;
    return seats;
}
var totalSeats = calcRes(age, child, guest);
console.log(totalSeats);

