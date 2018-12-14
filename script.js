const VARIANCE = 0.02;

let body = document.getElementsByTagName("body");
let message = document.getElementById("message");
body = body[0];

// [color value, isIncreasing?]
let colors = [[0, true], [0, true], [0, true]];

// increases value of the given color
function increaseColor(colorId) {
    if (colors[colorId][1]) {
        colors[colorId][0]++;
    } else {
        colors[colorId][0]--;
    }
}

// Randomly reverses the given color's direction
function randomize(colorId) {
    if (Math.random() < VARIANCE) {
        if (colors[colorId][1])
            colors[colorId][1] = false;
        else
            colors[colorId][1] = true;
    }
}

// if the given color is out of bounds, reverses direction to keep it in bounds
function checkOutOfBounds(colorId) {
    if (colors[colorId][0] >= 255) {
        colors[colorId][1] = false;
    } else if (colors[colorId][0] <= 1) {
        colors[colorId][1] = true;
    }
}

// interval changes color every 20 ms
setInterval(function () {

    // randomizes index between 0 and 2 inclusive
    randomize(Math.floor(Math.random() * colors.length));

    for (let i in colors) {
        increaseColor(i);
        checkOutOfBounds(i);
    }

    let bg_color = "rgb(" +
        colors[0][0] + "," +
        colors[1][0] + "," +
        colors[2][0] + ")";

    // +128 %256 to prevent blending in with the background.
    let color = "rgb(" +
        (colors[0][0] + 128) % 256 + "," +
        (colors[1][0] + 128) % 256 + "," +
        (colors[2][0] + 128) % 256 + ")";

    console.log(bg_color);

    message.style.color = color;
    body.style.backgroundColor = bg_color;

}, 20);