const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

function updateColor() {
    let r = red.value;
    let g = green.value;
    let b = blue.value;

    document.getElementById("redValue").innerText = r;
    document.getElementById("greenValue").innerText = g;
    document.getElementById("blueValue").innerText = b;

    document.getElementById("container").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);