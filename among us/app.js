const button = document.getElementById("button");

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");

const redImage = document.getElementById("red-image");
const yellowImage = document.getElementById("yellow-image");
const blueImage = document.getElementById("blue-image");button.onclick = () => {
    if (red.checked) {
    redImage.classList.remove("hidden");
    redImage.classList.add("eject");
    }
    if (blue.checked) {
    blueImage.classList.remove("hidden");
    blueImage.classList.add("eject");
    }
    if (yellow.checked) {
    yellowImage.classList.remove("hidden");
    yellowImage.classList.add("eject");
    }
    }