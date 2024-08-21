const container = document.querySelector(".container");
const squareDiv = document.createElement("div");
squareDiv.classList.add("square");

for (let i = 1; i <= 16; i++) {
  container.appendChild(squareDiv.cloneNode(true));
}
