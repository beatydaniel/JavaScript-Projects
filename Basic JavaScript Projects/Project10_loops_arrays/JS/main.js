function Call_Loop(){
    var count = "";
    var x = 1
    while (51 != x) {
        count += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = count;
}