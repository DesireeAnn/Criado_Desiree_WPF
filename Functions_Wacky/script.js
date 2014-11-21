/* Desiree Criado
11/20/14
Functions - Wacky
 */
//Calculate how many cups of coffee I will drink today

var shirts = prompt("Do I have to print shirts today? Enter 1 for yes or 0 for no.");

console.log(shirts);

var serve = prompt("Do I have to serve at the restaurant today? Enter 1 for yes or 0 for no.");

console.log(serve);

var homework = prompt("How many hours of homework do I have today?");

console.log(homework);

var totalCups = function(shirts, serve, homework){
    var coffee = shirts + serve + homework;
    return coffee;
}
console.log(totalCups);
alert("I will drink " + totalCups + " cups of coffee today.");
