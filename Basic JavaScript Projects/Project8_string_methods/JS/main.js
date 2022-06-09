function full_word(){
    var letter_1 = "H"
    var letter_2 = "E"
    var letter_3 = "L"
    var letter_4 = "L"
    var letter_5 ="O"
    var all = letter_1.concat(letter_2,letter_3,letter_4,letter_5); //combines all variables into one single word
    document.getElementById("id").innerHTML = all;
}

function slice_function(){
    var Sentence = "This is a sentence i want this \"word\" to show"
    var Section = Sentence.slice(32,36); // isolates the word "word"
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase(){
    let text = "This will be all Uppercase"
    let result = text.toUpperCase(); //makes all text uppercase
    document.getElementById("up").innerHTML = result;
}

function search_function(){
    let text = "This text will be searched"
    let position = text.search("text"); //locates the word text
    document.getElementById("search").innerHTML = position;
}

function string_method(){
    var A = 200
    document.getElementById("number").innerHTML = A.toString(); //makes the number a string
}

function percision(){
    var A = 500325.12305321; 
    document.getElementById("mark").innerHTML = A.toPrecision(3) //formats the number into a specified length
}

function fixed(){
    let num = 6.5349;
    let x = num.toFixed(); //makes a number into a string and rounds it 
    document.getElementById("fix").innerHTML = x;
}

function value_method(){
    let text = "This is Text"
    let result = text.valueOf(); //returns the primitive value of a string
    document.getElementById("value").innerHTML = result;
}