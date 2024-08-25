const container = document.querySelector(".container");
const numBtn = document.querySelector(".numBtn");
const numInput = document.querySelector(".numInput");
const clearBtn = document.querySelector(".clearBtn");

let gridSize = 0 || 16;
let newGridSize = gridSize * gridSize || 16 * 16;

//Initialize Function upon Loading
initLayout();

// Grid Layout Square
function gridGenerator() {
  for (let i = 1; i <= newGridSize; i++) {
    // it needs to create inside the for loop to create it when loops triggered. If it is outside in the for loop. It will not iterate in the desired output
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.addEventListener("mouseover", (event) => {
      let randomColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
      event.target.style.background = randomColor;
    });
    squareDiv.style.width = `calc(100% / ${gridSize})`;
    squareDiv.style.height = `calc(100% / ${gridSize})`;
    container.appendChild(squareDiv);
  }
}

// Reset Layout Square

function clearGrid() {
  container.innerHTML = "";
}

// Function onkeypress
function layoutSize(e) {
  if (e.key === "Enter" || e === "button") {
    if (
      !Number(numInput.value) ||
      Number(numInput.value) >= 101 ||
      Math.sign(numInput.value) === -1
    ) {
      alert("Please enter 1 to 100 numbers only");
    } else {
      gridSize = numInput.value;
      newGridSize = gridSize * gridSize;

      const sizeElem = document.querySelector(".layoutSize");
      sizeElem.textContent = `Size: ${gridSize} X ${gridSize}`;
      sizeElem.replaceWith(sizeElem);

      clearGrid();
      gridGenerator();
    }
  } else {
    return;
  }
}

function initLayout() {
  gridGenerator();
}

// For customizing grid size;
numBtn.addEventListener("click", (event) => {
  layoutSize("button");
});

clearBtn.addEventListener("click", () => {
  clearGrid();
  gridGenerator();
});
