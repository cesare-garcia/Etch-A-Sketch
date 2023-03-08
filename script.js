let button = document.querySelector(".generator-button");
let bodyContainer = document.querySelector(".body-container");

button.addEventListener("click", (e) => {
  let userChoice = prompt(
    "How many squares would you like in your grid per side? (limit: 100)"
  );
  let convertedUserChoice = parseInt(userChoice);

  if (convertedUserChoice > 100) {
    alert(
      "Please click the button again and enter a value less than or equal to 100."
    );
  } else if (isNaN(convertedUserChoice)) {
    alert(
      "Please click the button again and make sure that you have entered a number."
    );
  } else {
    if (bodyContainer.children.length > 2) {
      let removeGrid = document.querySelector(".grid-container");
      bodyContainer.removeChild(removeGrid);
    }

    createGrid(convertedUserChoice);
    let boxes = document.querySelectorAll(".grid-box");

    for (const box of boxes) {
      box.addEventListener("mouseover", (e) => {
        box.style.backgroundColor = "red";
      });
    }
  }
});

// console.log gridColumn if you need to verify # of children attached to a column.

function createGrid(dimensions) {
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  bodyContainer.appendChild(gridContainer);

  for (let i = 1; i <= dimensions; i++) {
    let gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column");
    gridContainer.appendChild(gridColumn);

    for (let j = 1; j <= dimensions; j++) {
      let newBox = createBox(dimensions);
      gridColumn.appendChild(newBox);
    }
  }
}

// add a console log for dimensions in this function if not sure it's coming through.

function createBox(dimensions) {
  let intDimensions = parseInt(dimensions);
  let adjustedMeasurements = intDimensions + 2;
  let box = document.createElement("div");
  box.classList.add("grid-box");
  box.style.height = `${550 / adjustedMeasurements}px`;
  box.style.width = `${550 / adjustedMeasurements}px`;
  return box;
}
