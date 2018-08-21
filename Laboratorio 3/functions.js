function myFunction() {

    var x = document.getElementById("myDIV");
    var y = document.getElementById("myButton");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.innerText = "Mostrar";
    } else {
        x.style.display = "block";
        y.innerText = "Ocultar"
    }
}