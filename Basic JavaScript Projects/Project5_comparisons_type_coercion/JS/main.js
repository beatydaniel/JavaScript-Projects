document.write(typeof 6)
document.write("10"+ 200)
document.write(10 < 5)
document.write(10 > 5)

function my_function() {
    document.getElementById("Test").innerHTML= 0/0;
}
function my_function2() {
    document.getElementById("Test").innerHTML= isNaN("Hello");
}

function my_function3(){
    document.getElementById("Test").innerHTML= isNaN("15");
}

function my_function4(){
    document.getElementById("Test").innerHTML= (2E310)
}

function my_function5(){
    document.getElementById("Test").innerHTML= (-3E310)
}