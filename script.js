"use strict";

const container = document.querySelector(".container");
const canvasSize = 600;
const sizeSlider = document.querySelector(".size");
const label = document.querySelector("span");

let cellCount = 16;
let mouseDown = false;

container.style.cssText = `width: ${canvasSize}px;`;
container.style.cssText += `height: ${canvasSize}px;`;

function clearGrid() {
  container.innerHTML = "";
  console.log(container.childElementCount);
}

function generateGrid(cellCount) {
  clearGrid();

  label.textContent = `${cellCount} x ${cellCount}`;
  container.style.cssText += `grid-template-columns: repeat(${cellCount}, 1fr);`;

  for (let i = 0; i < cellCount ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

generateGrid(cellCount);

document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));

container.addEventListener("mousemove", (e) => {
  if (mouseDown) e.target.style.backgroundColor = "black";
});

sizeSlider.addEventListener("change", (e) =>
  generateGrid(Number(e.target.value))
);
