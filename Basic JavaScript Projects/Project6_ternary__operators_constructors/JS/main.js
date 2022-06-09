function Ride_Function() {
    var Height,Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ": "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Age_Function(){ 
    var Age,Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old " : "You are not old "; //Sets the age to display one or the other if it is true or false
    document.getElementById("Vote").innerHTML = Can_vote + "enough to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper",2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Costructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Breed, Age, Color){  
    this.Animal_Breed = Breed; // this makes the object possess the function 
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}

var Puppy_1 = new Animal("Labrador","2","Yellow"); // the new keyword creates a new object
var Puppy_2 = new Animal("Shiba Inu", 2, "Tan");
var Puppy_3 = new Animal("Dalmation", 3,"White and Black");
function myFunction2(){
    document.getElementById("New_and_This").innerHTML =
    "Puppy 1 is a " + Puppy_1.Animal_Breed + " its fur is " + Puppy_1.Animal_Color +
    " its age is " + Puppy_1.Animal_Age;
}

function nest_function() {    //Nest function
    document.getElementById("Nested_Function").innerHTML = Down();
    function Down() {
        var Starting_point = 10; // starting value of 10
        function Minus_one() {Starting_point -= 1;} //subtracting 1 from the starting point 
        Minus_one();
        return Starting_point; //after the function runs it returns the new value of 9
    }
}