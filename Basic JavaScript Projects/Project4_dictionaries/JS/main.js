function myDictionary() {
    var Animal = {
        Species: "Dog",
        Color:"Tan",
        Breed:"Shiba Inu",
        Age: 2,
        Sound:"Aroooo"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}