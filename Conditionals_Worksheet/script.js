/* Desiree Criado
11/12/14
Conditionals Worksheet
 */

//Group 1 - Last Chance for Gas!

var mpg = 40;
var totalGas = 15;
var currentGas = totalGas/5;

if(currentGas * mpg >= 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + Number(currentGas) + " gallons of gas in your tank, better get gas now while you can!");
}
