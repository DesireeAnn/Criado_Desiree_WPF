/*
Desiree Criado
11/13/14
Conditionals - Industry
 */

//Which shirt brand yields the most profit?
alert("Let's find out which shirt brand will create the highest profit!");
//Ask user for first brand's wholesale price.
var shirtPriceA = prompt("What is the wholesale price of the first shirt brand?");

//Check for user input
if(shirtPriceA === ""){
    shirtPriceA = prompt("Looks like we missed your response. What is the wholesale price of the first shirt brand?");
}
//Ask user for second brand's wholesale price
var shirtPriceB = prompt("What is the second brand's wholesale price?");

//Check for user input
if(shirtPriceB === ""){
    shirtPriceB = prompt("Oops! We need answer. What is the second brand's wholesale price?");
}
//Define client's unit price
var unitPrice = 10;

//Calculate profit for each brand
var profitA = unitPrice - shirtPriceA;
var profitB = unitPrice - shirtPriceB;

//Determine which brand has the greatest amount of profit
(profitA > profitB) ? console.log("The first brand will give you the most profit.") : console.log("The second brand will give you the most profit.");


