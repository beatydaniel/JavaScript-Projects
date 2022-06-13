function validateForm() {
    let x = document.forms["myForm"]["fname","fname2","fname3"].value;
    if (x == "") {
      alert("All of the form must be filled out");
      return false;
    }
}
