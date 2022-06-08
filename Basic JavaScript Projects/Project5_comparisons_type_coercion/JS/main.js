document.write(typeof 6)
document.write("10"+ 200)

function function1(){
    document.getElementById("Test").innerHTML="Here"+ 0/0;
}
function function2(){
    document.getElementById("Test").innerHTML="here" + isNaN("Hello");
}
function function3(){
    document.getElementById("Test").innerHTML="here" + isNAN("15");
}