let bodyContainer = document.querySelector('.body-container');

for (let i = 0; i < 256; i++) {
    let newBox = createBox();
    bodyContainer.appendChild(newBox);
}

let boxes = document.querySelectorAll('.grid-box');

for (const box of boxes) {
    box.addEventListener('mouseover', (e) => {
        box.style.backgroundColor = 'red';
    });
}

function createBox() {
    let box = document.createElement('div');
    box.classList.add('grid-box');
    return box;
}