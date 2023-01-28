let bodyContainer = document.querySelector('.body-container');

for (let i = 0; i < 256; i++) {
    let newBox = createBox();
    bodyContainer.appendChild(newBox);
}

function createBox() {
    let box = document.createElement('div');
    box.classList.add('grid-box');
    return box;
}