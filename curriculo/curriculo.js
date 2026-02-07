function toggleDiv() {
    var x = document.getElementsByClassName("card");
    if (x.style.display === "none") {
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}