//Conditional Logic

/*var oldEnough = false;

//if the child is old enough, print to the console "you can ride!"
if(oldEnough){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
console.log("What comes after");


//Relational Expressions

var kidHeight = 40;
var minHeight = 48;

//if the child is over the height of 48 inches
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}


//Conditional Logic with an Expression

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the child is over the height of 48 inches, but shoes give them extra 2 inches
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}


//If and else

var kidHeight = 47;
var minHeight = 48;

//if the child is over the height of 48 inches
if(kidHeight >  minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
//If the child is not over 48 inches
else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}


//else if

var kidHeight = 42;
var minHeight = 48;
var parentHeight = 45; //the height of the kid with the parent

//if the child is over the height of 48 inches
if(kidHeight >  minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
//If the child is not over 48 inches
else if(kidHeight > parentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry, you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}
*/

//Relational and Equality operators - can only compare 2 things for T/F

//Logical Operators - only used between boolean variables or relational expressions

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if price of the phone is less than our budget AND we win the lottery
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}


