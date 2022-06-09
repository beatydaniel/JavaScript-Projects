document.write(typeof 6) //Type of a number like this displays number on the document,if it were a word "hello" it would come out as string.
document.write("10"+ 200) // Combines a string and a number making it appear as 10200
document.write(10 < 5) // displays a false
document.write(10 > 5) // displays a true
console.log(5 + 5); // f12 on html displays the result
console.log(15>20); // f12 on htrml displays a false result
document.write(20 == 20); // displays a true because they are equal
document.write(1 == 12); // displays a false
document.write(4 === 4); // displays a true because they are the same 
document.write(3 === "six"); //displays false because it is a number and a word
document.write(2 === "two"); // displays a false because it is a number and a word
document.write(5 === 6); //displays false because they  are different numbers
document.write(10 > 2 && 5>3); // displays a true because both AND are true
document.write(11>20 && 12>3); // displays false because one AND is false
document.write(11>20 || 12>3); // displays a true because oone OR is true
document.write(10<2 || 5<3); // displays a false because both OR are false

function my_function() { // displays a NaN because you cant divide 0 by itself
    document.getElementById("Test").innerHTML= 0/0;
}
function my_function2() { // displays a true because Hello is not a number
    document.getElementById("Test").innerHTML= isNaN("Hello");
}

function my_function3(){ // displays a false because 15 is a number
    document.getElementById("Test").innerHTML= isNaN("15");
}

function my_function4(){ // displays ininity 
    document.getElementById("Test").innerHTML= (2E310)
}

function my_function5(){ // displays -infinity
    document.getElementById("Test").innerHTML= (-3E310)
}

function not_function(){ // displays  a false by using a NOT !
    document.getElementById("Test").innerHTML= ! (20> 12);
}
function not_function2(){ // displays a true by using a NOT ! 
    document.getElementById("Test").innerHTML = ! (3 > 23);
}