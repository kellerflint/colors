let body = document.getElementsByTagName("body");
let message = document.getElementById("message");
body = body[0];

let colors = [[0, true], [0, true], [0, true]];

function increaseColor(colorId) {
    if (colors[colorId][1]) {
        colors[colorId][0]++;
    } else {
        colors[colorId][0]--;
    }
}

function randomize(colorId) {
    if (Math.random() < 0.05) {
        if (colors[colorId][1])
            colors[colorId][1] = false;
        else
            colors[colorId][1] = true;
    }
}

function checkOutOfBounds(colorId) {
    if (colors[colorId][0] >= 255) {
        colors[colorId][1] = false;
    } else if (colors[colorId][0] <= 1) {
        colors[colorId][1] = true;
    }
}

setInterval(function () {

    for (let i in colors) {
        increaseColor(i);
        randomize(i);
        checkOutOfBounds(i);
    }

    let bg_color = "rgb(" +
        colors[0][0] + "," +
        colors[1][0] + "," +
        colors[2][0] + ")";

    // +128 and %256 to make sure the color of the text doesn't blend in with the background color.
    let color = "rgb(" +
        (colors[0][0] + 128) % 256 + "," +
        (colors[1][0] + 128) % 256 + "," +
        (colors[2][0] + 128) % 256 + ")";

    console.log(bg_color);

    message.style.color = color;
    body.style.backgroundColor = bg_color;

}, 20);