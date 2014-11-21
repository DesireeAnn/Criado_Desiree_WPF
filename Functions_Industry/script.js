/* Desiree Criado
11/20/14
Functions - Industry
 */
//Providing basic price quote for clients

//Greet User
alert("Thank you for your interest in our work! We'd be happy to provide you with a basic estimate.");

//Prompt for Shirt or Sweater
var style = prompt("Are you purchasing a shirt or sweater?");

//Prompt for Front Only or Front and Back
var sides = prompt("Design on Front Only or Front and Back?");

//Prompt for Number of Colors based on previous answer
if(sides = "Front Only"){
    var colors = prompt("How many colors are in the design?");
}else{var colors = prompt("How many colors on the front and back combined?");}
