function myDictionary() {
    var Animal = {
        Species: "Dog",
        Color:"Tan",
        Breed:"Shiba Inu",
        Age: 2,
        Sound:"Aroooo"
    };
    delete Animal.Breed; //deletes Breed from the dictionary causing a undefined if called on
    document.getElementById("Dictionary").innerHTML = Animal.Breed; //calls on the variable Animal and selects the Key that matches Breed
}