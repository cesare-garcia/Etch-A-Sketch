let button = document.querySelector('.generator-button');
let bodyContainer = document.querySelector('.body-container');

button.addEventListener('click', (e) => {
    let userChoice = prompt('How many squares would you like in your grid per side? (limit: 100)');

    if ( userChoice > 100 ) {
        alert('Please click the button again and enter a value less than or equal to 100.');   
    } else {
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
    
    for (let i = dimensions; i <= totalDimensions; i++) {
        let newBox = createBox();
        gridContainer.appendChild(newBox);
    }
}

function createBox() {
    let box = document.createElement('div');
    box.classList.add('grid-box');
    return box;
}