function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great choice!";
    switch(Animals) { 
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Horse":
            Animal_Output = "Horse" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "Bear" + Animal_String;
        break;
        case "Shark":
            Animal_Output = "Shark" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter a animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Change_Text_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text changed!"; // A[0] makes it change only the first element that uses the class "Click"
}
{
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.beginPath(); //starting point of the circle
ctx.arc(95,50,40,0,2 *Math.PI); //sets the angle of the circle
ctx.stroke();
}

var c = document.getElementById("Canvas_2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");

ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100)