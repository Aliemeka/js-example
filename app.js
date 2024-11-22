let boxTag = document.querySelector(".box");

function turnBoxRed() {
  boxTag.style.backgroundColor = "red";
}
function turnBoxBlue() {
  boxTag.style.backgroundColor = "blue";
}
function turnBoxGreen() {
  boxTag.style.backgroundColor = "green";
}

// Assignment
/**
 * Box size is 200px by 200px
 * Add extra reactivity to the box so that
 * When the user hovers on the box, it grows to 500px in height and width
 * When the user leaves it should return to it's original size
 * Add a rotate CW button and a rotate anti CW button that rotates the box when user clicks on them
 * Stop button that stops the shape from rotating
 * Add a button that turns the shape to a circle when clicked the first time and reverses it when clicked again (Transistion duration)
 *
 */

// Make the box grow when hovered upon

function grow() {
  boxTag.classList.add("grow");
}

function returnToNormal() {
  boxTag.classList.remove("grow");
}

function rotateCW() {
  boxTag.classList.add("rotate-cw");
  boxTag.classList.remove("rotate-acw");
}

function rotateACW() {
  boxTag.classList.add("rotate-acw");
  boxTag.classList.remove("rotate-cw");
}

function stopRotation() {
  boxTag.classList.remove("rotate-cw");
  boxTag.classList.remove("rotate-acw");
}

function toogleCircle() {
  boxTag.classList.toggle("circle");
}
