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

//Age verification for 1 child
prompt("Is your child 18 or over?");

//Age verification for multiple children
prompt("Please enter the age of each child.");

//Underage Child alert
var underAge = child < 18
alert("I'm sorry, but this event is for adults only. We apologize for the inconvenience.");

if(child >= 18)
