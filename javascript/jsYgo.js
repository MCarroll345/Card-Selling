function switchImage1() {

    var image = document.getElementById('crd1');

    if (image.src.match("bewg")) {
        image.src = "../images/backcard.jfif";
    }
    else {
        image.src = "../images/bewg.jfif";
    }
}

function switchImage2() {

    var image = document.getElementById('crd2');

    if (image.src.match("esc")) {
        image.src = "../images/backcard.jfif";
    }
    else {
        image.src = "../images/esc.jpg";
    }
}

function switchImage3() {

    var image = document.getElementById('crd3');

    if (image.src.match("numer")) {
        image.src = "../images/backcard.jfif";
    }
    else {
        image.src = "../images/numer.jpg";
    }
}