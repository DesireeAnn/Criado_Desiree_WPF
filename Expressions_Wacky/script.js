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

var daysSingle = prompt("How many days do I intend to spend in the park without him throughout the year?");

//console.log user input
console.log(daysSingle);

//divide days with fiance by 2 for half the churro
var disneySweets = [daysShared/2, daysSingle];

//console.log results
console.log(disneySweets);

//add days by myself to days with my fiance/2
var disneySweets = Number(disneySweets[0]) + Number(disneySweets[1]) ;

//console.log results
console.log(disneySweets);

//calculate total days spent in Disneyland
var totalDays = Number(daysSingle) + Number(daysShared);

//console.log results
console.log(totalDays);

//Alert user to results
alert("If I visit Disneyland " + totalDays + " days and spend " +daysShared+ " of those days with my fiance', I will eat " + disneySweets + " churros in Disneyland next year!");
