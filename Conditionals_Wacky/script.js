/*
Desiree Criado
11/13/14
Conditionals - Wacky
 */

//Find out whether your facebook friends post mostly celebrity news, political news,
// a little of both, or neither
alert("What kind of posts fill your facebook feed?");
//Define celebrity variable; prompt user
var celeb = prompt("Have you seen Kim Kardashian's latest ad?");
//Check for user input
if(celeb === ""){
    var celeb = prompt("Looks like we didn't catch that answer! Have you seen Kim K's latest ad?");
}
//Define political variable; prompt user
var poli = prompt("On November 2nd, was your feed filled with posts that said \n'I Voted'?");
//Check for user input
if(poli === "") {
    var poli = prompt("We need your answer! On November 2nd, was your feed filled with posts that said \n'I Voted'?");
}
//If user answered yes to both
if(celeb === "yes" && poli === celeb){
    console.log("Congratulations! You have a well-rounded Facebook feed.");
//if user answered no to both
}if(celeb === "no" && poli === celeb){
    console.log("Your Facebook friends are quite inactive.");}
//if user answered yes to the first question and no to the second
if(celeb === "yes" && poli != celeb){
    console.log("Your feed is full of celebrity news!");
}
//if user answered no to the first question and yes to the second
if(celeb === "no" && poli != celeb){
    console.log("You've got some real politicos in your friends' list!");
}
