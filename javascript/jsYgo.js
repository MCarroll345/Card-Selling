function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("colorbottel")) {
        image.src = "../images/backcard.jfif";
    }
    else {
        image.src = "../images/bewg.jfif";
    }
}