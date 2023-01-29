let button = document.querySelector('.generator-button');
let bodyContainer = document.querySelector('.body-container');

button.addEventListener('click', (e) => {
    let userChoice = prompt('How many squares would you like in your grid per side? (limit: 100)');

    if ( userChoice > 100 ) {
        alert('Please click the button again and enter a value less than or equal to 100.');   
    } else {
                
        if ( bodyContainer.children.length > 2 ) {
            let removeGrid = document.querySelector('.grid-container');
            bodyContainer.removeChild(removeGrid);
        }
        
        createGrid(userChoice);
        let boxes = document.querySelectorAll('.grid-box');

        for (const box of boxes) {
            box.addEventListener('mouseover', (e) => {
                box.style.backgroundColor = 'red';
            });
        }
    }
})

function createGrid(dimensions) {
    
    let totalDimensions = dimensions * dimensions;

    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    bodyContainer.appendChild(gridContainer);
    
    for (let i = 1; i <= totalDimensions; i++) {
        let newBox = createBox(dimensions);
        gridContainer.appendChild(newBox);
    }
}

function createBox(dimensions) {
    console.log(dimensions);
    let intDimensions = parseInt(dimensions);
    let adjustedMeasurements = intDimensions + 2;
    console.log(adjustedMeasurements);
    let box = document.createElement('div');
    box.classList.add('grid-box');
    box.style.height = `${(550/adjustedMeasurements)}px`;
    box.style.width = `${(550/adjustedMeasurements)}px`;
    return box;
}