"use strict";

const container = document.querySelector(".container");
let mouseDown = false;

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));

container.addEventListener("mousemove", (e) => {
  if (mouseDown) e.target.style.backgroundColor = "black";
});
