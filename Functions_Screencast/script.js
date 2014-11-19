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
*/
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