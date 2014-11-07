/*Desiree Criado
11-06-14
Expressions - Personal
 */

//Alert user to the purpose: how much money will fill your tank
alert("Let's fill up your gas tank!");

//Ask user how much gas is in their car right now
var current = prompt("How many gallons of gas are currently in your car?");

//Ask user how much gas the car hold in total
var total = prompt("What is the total amount of gas the tank can hold?");

//Ask user how much gas costs per gallon in their area
var price = prompt("What is the cost of gas per gallon at the gas station?");

//Calculate the total cost of gas
var cost = (total - current) * price;

//Alert users to the results
alert("It will cost you $" +cost+ " to fill your tank.");
