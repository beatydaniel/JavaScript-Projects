function Call_Loop(){
    var count = "";
    var x = 1
    while (51 != x) { //makes it so a loop will go on until x is 51
        count += "<br>" + x; 
        x++;
    }
    document.getElementById("Loop").innerHTML = count;
}

function set_length(){
    let text = "text"
    let length = text.length            //takes the length of the text and counts how many characters are in the string
    document.getElementById("text").innerHTML=length
}

var Instruments = ["Guitar", "Drums", "Piano","Bass","Violin","Trumpet", "Flute"]; 
var Content = "";               
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //sets it so that it will loop until all of instruments is displayed.
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function array_Function() { 
    var array_1 = [];
    array_1[0]= 5; //variables inside the array
    array_1[1]= 6;
    array_1[2]= 7;
    array_1[3]= 8;
    document.getElementById("Array").innerHTML = "Here is some of the array " + array_1[2] + "&nbsp" + array_1[3];
}

function constant_function(){
    const fruit = {type: "apple", color:"red"};
    fruit.color = "green"; //change in the value
    document.getElementById("Constant").innerHTML = "The " + fruit.type + " is " + fruit.color;
}

function let_function(){
    let x = 20;
    document.getElementById("let").innerHTML = (x);
}
function function_1(word){
    
    return "Hello " + word;
}
document.getElementById("return").innerHTML = function_1("World ");

let dog = {             //object
    type: "Labrador ",  //object properties
    color: "Yellow ",
    age: "2 ",
    description : function() {
        return "The dog is a " + this.color + this.type + "that is " + this.age + "years old. "; 
    }
}
document.getElementById("dog_object").innerHTML = dog.description();

let text = "";
for (let x = 0; x < 10; x++){ // a loop that goes if x is less than 10
    if (x === 5) {break; }  // will stop the loop if x is 5
    text += "The number is " + x + "<br>";
    document.getElementById("breaking").innerHTML = text;
} 