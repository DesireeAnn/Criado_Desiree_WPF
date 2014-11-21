/* Desiree Criado
11/20/14
Functions - Industry
 */
//Providing basic price quote for clients

//Greet User
alert("Thank you for your interest in our work! We'd be happy to provide you with a basic estimate.");

//Prompt for Shirt or Sweater
var style = prompt("Are you purchasing a shirt or sweater?");
//Define style with monetary amount
style == ("shirt") ? style = 3 : style = 13;

//Print to console
console.log(style);

//Prompt for Front Only or Front and Back
var sides = prompt("Does the design require 1 side or 2 sides?");

//Print to console
console.log(sides);

//Prompt for Number of Colors based on previous answer
if(sides < 2){
    var colors = prompt("How many colors are in the design?");
}else if(sides = 2){
    var colors = prompt("How many colors on the front and back combined?");}

//Print to console
console.log(colors);
//Define design fee variable
var designFee = 4
//Function call
calcPrice(Number(designFee), Number(style), Number(sides), Number(colors));
//Function definition
function calcPrice(designFee, style, sides, colors){
    var price = designFee + style + (sides * colors);
    console.log("The shirt will cost $" + price);
    alert("The shirt will cost $" + price);
}


