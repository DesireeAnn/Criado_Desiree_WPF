/* Desiree Criado
  11/19/14
  Functions Worksheet
 */

//Circumference
var calcCirc = function(radius, pi){
    var circ = radius * pi;
    return circ;
}
var a = calcCirc(2,3.14);
console.log("The circumference of the circle is "+ a);

//Stung!
var calcTotalStings = function(weight){
    var noStings = weight * 8.666666667;
    return noStings;
}
