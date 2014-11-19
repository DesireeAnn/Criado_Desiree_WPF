//Functions - Basic Structure
/*
function functionName (){
    //code the function runs
}

//Functions - Execution

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
*/
function dogYears(age){//holds parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears+ " years old.");
}
var age1 = 4;
dogYears(6);//holds arguments
dogYears(age1);