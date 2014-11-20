//Functions - Basic Structure
/*
function functionName (){
    //code the function runs
}

//Functions - Invocation

//Function Definition
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
//Function Call
calcArea();
calcArea();
calcArea();

//Functions - Variable Scope

//Variable is outside function
var width = 5;
//Variable is scoped to function
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
//If we call the function, the variable scoped to function will be used.
calcArea();

//Functions - Arguments and Parameters

//Basic layout
funcName (argument1, argument2);
function funcName (parameter1, parameter2){
    //code the function runs
}

function dogYears(age){//holds parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears+ " years old.");
}
var age1 = 4;
dogYears(6);//holds arguments
dogYears(age1);

//Functions - Returning Values

var total = calcArea(30, 20);//store functions' return into variable

function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out
}
console.log(total);

//Functions vs. Procedures - Functions return values and Procedures do not
function calcAreaF(width, height){
    var area = width * height;
    return area;//function call
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}

//Anonymous Functions - also called closures
//MUST DEFINE FUNCTION before you can invoke it
var functionName = function(){
    //code the function runs
}
functionName();
    */
//define anonymous function
var calcArea = function(width, height){
    var area = width * height;
    return area;
}
//invoke function
var a = calcArea(20,30);
console.log(a);