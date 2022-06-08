document.write(typeof 6)
document.write("10"+ 200)

function my_function() {
    document.getElementById("Test").innerHTML= 0/0;
}
function my_function2() {
    document.getElementById("Test").innerHTML= isNaN("Hello");
}

function my_function3(){
    document.getElementById("Test").innerHTML= isNaN("15");
}