
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

 function math_random(){
     Math.random();
     document.getElementById("Math").innerHTML= Math.random(); //created a random number between 0 and 1
 }

 function increase_function(){
     var X=5;
     X++;
     document.getElementById("Math").innerHTML="Here a 5 increases by 1 which is " + X++; // using the ++ makes the variable increase by 1
 }

 function decrease_function(){
     var Y=5;
     Y--;
     document.getElementById("Math").innerHTML="Here a 5 decreases by 1 which is " + Y--; //using the -- makes the variable decrease by 1
 }