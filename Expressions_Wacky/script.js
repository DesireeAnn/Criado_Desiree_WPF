/* Desiree Criado
11-06-14
Expressions - Wacky
 */

//Calculate how many churros I have eaten in a year at Disneyland
//Alert the user to the purpose

alert("In one week, I will renew my Annual Passport to Disneyland.\n If I buy a churro every time I go to Disneyland,\n how many churros will I eat in a year?");

//Ask user: how many days do I intend to spend in the park throughout the year?

//Alert user to days shared with my fiance. Ask user how many days will be with my fiance
alert("Whenever I go with my fiance, we always split a churro.");
var daysShared = prompt("How many days will I visit the park with him throughout the year?");

//console.log user input
console.log(daysShared);

var days = prompt("How many days do I intend to spend in the park without him throughout the year?");

//console.log user input
console.log(days);

//divide days with fiance by 2 for half the churro
var disneySweets = [daysShared/2, days];

//console.log results
console.log(disneySweets);

//add days by myself to days with my fiance/2
var disneySweets = disneySweets[0] + disneySweets[1] ;

//Alert user to results
alert("If I visit Disneyland" + daysI will eat "+disneySweets+" churros in Disneyland next year!");