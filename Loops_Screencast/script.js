//Loops - "while" loop

var b = 99;//sets up the index

while (b > 0){ //checks the condition
    console.log(b + " kegs on the wall");
    b--;//increments or decrements the index
}
//Loops - "do while" loop

var c = 10;

do{
    console.log(c + " kegs on the wall");
    c--;
}
while(c > 0);

//Loops - "for" loop: combines loops into one line

for (var i = 10; i > 0; i--){
    console.log(i + " kegs on the wall")
}