/*Desiree Criado
11-06-14
Expressions - Personal
 */
//Calculate how much it will cost to fill user's gas tank in their car
//Alert user to the purpose
alert("Let's find out how much it will cost to fill up your car's gas tank!");

//Ask user how much gas is in their car right now
var current = prompt("How many gallons of gas are currently in your car?");

//Console.log out the response
console.log("There are " + current + " gallons of gas currently in the car's tank.");

//Ask user how much gas the car hold in total
var total = prompt("What is the total amount of gas the tank can hold?");

//Console.log out the response
console.log("The car can hold a total of " + total + " gallons of gas.");

//Ask user how much gas costs per gallon in their area
var price = prompt("What is the cost of gas per gallon at the gas station?");

//Console.log out the response
console.log("Gas currently costs $" + price + ".");

//Calculate the total cost of gas
var cost = (total - current) * price;

//Console.log results
console.log("It will cost you$" + cost + " to fill your tank.");

//Alert users to the results
alert("It will cost you $" + cost + " to fill your tank.");
