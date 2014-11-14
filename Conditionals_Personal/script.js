/* Desiree Criado
11/12/14
Conditionals - Personal
 */
//Determine how many times the animals (cats and dogs) need to be fed
//Greet user

alert("Thank you for feeding our pets while we're away!");

//Record whether or not the cats already ate their first serving
var cats = prompt("Do the cats currently have food in their bowl?");

//Check for user input
if(cats === ""){cats = prompt("Uh oh! Let's try that again. Do the cats currently have food in their bowl?");}

//Record whether or not the dogs already ate their first serving
var dogs = prompt("Do the dogs currently have food in their bowl?");

//Check for user input
if(dogs === ""){dogs = prompt("Looks like we missed your answer! Do the dogs currently have food in their bowl?");}

//If both the dogs and cats have empty bowls
if(cats === "no" && cats === dogs){
    alert("You will need to feed the cats and the dogs twice.");
    console.log("You will need to feed the cats and the dogs twice.");}

//If both the cats and dogs have food in their bowls
if(cats === "yes" && cats === dogs){
    alert("You will need to feed the cats and the dogs only once.");
    console.log("You will need to feed the cats and the dogs only once.");}

 //If the cats have food in their bowls but the dogs do not
if(cats === "yes" && cats != dogs){
    alert("You will need to feed the cats once and the dogs twice.");
    console.log("You will need to feed the cats once and the dogs twice.");}

 //If the cats do not have food in their bowls but the dogs do
if(cats === "no" && cats != dogs){
    alert("You will need to feed the cats twice and the dogs once.");
    console.log("You will need to feed the cats twice and the dogs once.");}
