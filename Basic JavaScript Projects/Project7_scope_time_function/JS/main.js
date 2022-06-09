var X = 10 //global variable
function function1(){
    var Y = 5; // local variable
    document.write(Y + X + "<br>");
    console.log(Y + X);  // sets to display in console
}
function function2(){
    document.write(Y + X);
    console.log //errors displayed in console.(because Y is not defined) 
}
function1();
function2();

function function_date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "Hope you had a good day";
    }
}

function function3(){
    var A = 10
    var B = 5
    if (A > B){   // if statement is true it displays text but if not nothing without a "else"
        document.getElementById("Math").innerHTML = "10 is greater than 5";
    }
}

function function4() {   
    Age = document.getElementById("Age").value;
    if (Age >= 18) {                                //if age is greater than or equal to 18 it displays this
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!"; // if the value is not over 18 displays this
    }
    document.getElementById("your_age").innerHTML = Vote;
}

function function5() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) { //sets it so that if the time is before 12pm it will display morning
        Reply = "Its morning!";
    }
    else if (Time >= 12 == Time < 18) { //sets that if it is after 12pm but before 6pm then display afternoon
        Reply = "Its afternoon!";
    }
    else {                  // sets that if its not either of those then display evening
        Reply = "Its evening!";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}