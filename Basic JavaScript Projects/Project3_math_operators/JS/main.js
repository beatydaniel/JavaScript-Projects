var X = 5;
X++;
document.write(X);
var Y = 5;
Y--;
document.write ('<br>'+ Y);

window.alert(Math.random() * 100 );

function addition_function() {
    var addition = 5 + 5;
     document.getElementById("Math").innerHTML = "5 + 5 = " + addition;
}
function subtraction_function() {
    var subtraction = 5 - 5;
    document.getElementById("Math").innerHTML = "5 - 5 = " + subtraction;
}

function multiplication_function() {
    var multiplication = 5 * 5;
    document.getElementById("Math").innerHTML = "5 * 5 = " + multiplication;
}

function division_function(){
    var division = 5 / 5;
    document.getElementById("Math").innerHTML = "5 / 5 = " + division;
}

function math_function(){
    var simple_math = (5 + 5) * 2 / 2 - 2;
    document.getElementById("Math").innerHTML = "(5 + 5) * 2 / 2 - 2 = " + simple_math;
}

function modulus_operator() {
    var simple_math = 35 % 6;
    document.getElementById("Math").innerHTML = "When you divide 35 by 6 you have a remainder of: " + simple_math;
}

function negation_operator(){
    var x = 5;
    document.getElementById("Math").innerHTML= "Here 5 changes into a "  + -x;
}

