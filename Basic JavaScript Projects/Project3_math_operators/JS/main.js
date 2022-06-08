var X = 5;              //declaring the variable    
X++;                    //+1 to variable
document.write(X);      //writing the variable after its been increased by 1
var Y = 5;              
Y--;                    //-1 to the variable
document.write ('<br>'+ Y); // seperating the previous document.write and including the Y variable decreased by 1

window.alert(Math.random() * 100 ); //creating a alert that shows a random number 0-100

function addition_function() { // a function that adds the numbers together
    var addition = 5 + 5;
     document.getElementById("Math").innerHTML = "5 + 5 = " + addition; // Id is Math and is used as a way to call the function into the html,contains text and then calcualtes from the variable.
}
function subtraction_function() { //Subtraction function 
    var subtraction = 5 - 5;
    document.getElementById("Math").innerHTML = "5 - 5 = " + subtraction;
}

function multiplication_function() { // Multiplication function
    var multiplication = 5 * 5;
    document.getElementById("Math").innerHTML = "5 * 5 = " + multiplication;
}

function division_function() {  // Division Function
    var division = 5 / 5;
    document.getElementById("Math").innerHTML = "5 / 5 = " + division;
}

function math_function(){       //  A simple math prolem function
    var simple_math = (5 + 5) * 2 / 2 - 2;
    document.getElementById("Math").innerHTML = "(5 + 5) * 2 / 2 - 2 = " + simple_math;
}

function modulus_operator() { 
    var simple_math = 35 % 6; // Using % makes it divide and gives you the remainder of the number
    document.getElementById("Math").innerHTML = "When you divide 35 by 6 you have a remainder of: " + simple_math;
}

function negation_operator(){
    var x = 5;
    document.getElementById("Math").innerHTML= "Here 5 changes into a "  + -x; //adding a - sign to a variable can turn the number into a negative.
}