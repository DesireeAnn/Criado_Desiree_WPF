/*Desiree Criado
11-06-14
Expressions - Industry
 */
//Calculating how many screens I will need next week for my current job as a screen printer.

//Ask the user if the design is front only or front and back.
var designSide = prompt("Let's see how many silkscreens Desi needs to print this week! \nDoes the design require printing on 1 side or 2 sides?");
//Console.log out the response
console.log(designSide);

//Ask the user how many colors are in the design.
var color = prompt("How many colors are on each side of the design?");
//Console.log out the response
console.log(color);

//Ask the user how many designs need to be printed.
var designNo = prompt("How many designs need to be printed?");
//Console.log out the response
console.log(designNo);

//Calculate total number of screens
var totalScreens = designSide * designNo + color * designNo;

//Present results to user
alert("Desi will need "+ totalScreens + " screens to print this week.");


