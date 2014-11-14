/*
Desiree Criado
11/13/14
Conditionals - Wacky
 */

//
alert("What kind of posts fill your facebook feed?");

var celeb = prompt("Have you seen Kim Kardashian's latest ad?");

var poli = prompt("On November 2nd, was your feed filled with posts that said \n'I Voted'?");

if(celeb === "yes" && poli === celeb){
    console.log("Congratulations! You have a well-rounded Facebook feed.");

}if(celeb === "no" && poli === celeb){
    console.log("Your Facebook friends are quite inactive.");}

if(celeb === "yes" && poli != celeb){
    console.log("Your feed is full of celebrity news!");
}
if(celeb === "no" && poli != celeb){
    console.log("You've got some real politicos in your friends' list!");
}