let gridContainer = document.querySelector('.grid-container');

createGrid(20);

let boxes = document.querySelectorAll('.grid-box');

for (const box of boxes) {
    box.addEventListener('mouseover', (e) => {
        box.style.backgroundColor = 'red';
    });
}

function createGrid(dimensions) {
    
    
    let totalDimensions = dimensions * dimensions;
    
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