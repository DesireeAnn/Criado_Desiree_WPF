/*Desiree Criado
11-06-14
Expressions - Industry
 */
//Calculate how many screens I will need next week for my current job as a screen printer.

//Alert user to purpose
alert("Let's see how many silkscreens Desi needs to screenprint this week!");

//Ask the user if the design is front only or front and back.
var designSide = prompt("Does the design require printing on 1 side or 2 sides?");
//Console.log out the response
console.log("The design has " + designSide + " side(s).");

//Ask the user how many colors are in the design.
var color = prompt("How many colors are on each side of the design?");
//Console.log out the response
console.log("Each side of the design has " + color+ " color(s).");

//Ask the user how many designs need to be printed.
var designNo = prompt("How many designs need to be printed?");

//Console.log out the response
console.log(designNo + " design(s) need to be printed.");

//Calculate total number of screens
var totalScreens = designSide * designNo + color * designNo;
 //Console.log out results
console.log("Desi will need " + totalScreens + " screen(s) to print this week.");
//Present results to user
alert("Desi will need "+ totalScreens + " screens to print this week.");


