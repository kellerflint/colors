let body = document.getElementsByTagName("body");
let colors = document.getElementById("colors");
body = body[0];

let red = 2;
let green = 2;
let blue = 2;

let increaseRed = true;
let increaseGreen = true;
let increaseBlue = true;

setInterval(function () {

    // Increase or decrease colors
    if (increaseRed) {
        red++;
    } else {
        red--;
    }

    if (increaseGreen) {
        green++;
    } else {
        green--;
    }

    if (increaseBlue) {
        blue++;
    } else {
        blue--;
    }

    // To make changes randomer
    if (Math.random() < 0.05) {
        if (increaseRed)
            increaseRed = false;
        else
            increaseRed = true;
    }

    if (Math.random() < 0.05) {
        if (increaseRed)
            increaseRed = false;
        else
            increaseRed = true;
    }

    if (Math.random() < 0.05) {
        if (increaseRed)
            increaseRed = false;
        else
            increaseRed = true;
    }

    // Prevents out of bounds colors
    if (red >= 255) {
        increaseRed = false;
    }

    if (red <= 1) {
        increaseRed = true;
    }

    if (green >= 255) {
        increaseGreen = false;
    }

    if (green <= 1) {
        increaseGreen = true;
    }

    if (blue >= 255) {
        increaseBlue = false;
    }

    if (blue <= 1) {
        increaseBlue = true;
    }




    console.log(blue);

    let bg_color = "rgb(" + red + "," + green + "," + blue + ")";
    // +128 and %256 to make sure the color of the text doesn't blend in with the background color.
    let color = "rgb(" + (red + 128) % 256 + "," + (green + 128) % 256 + "," + (blue + 128) % 256 + ")";

    colors.style.color = color;
    body.style.backgroundColor = bg_color;

}, 20);