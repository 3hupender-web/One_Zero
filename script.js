// script.js
let clickCount = 0;

// Track click events
document.addEventListener('click', () => {
    clickCount++;
    displayClickCount();
});

// Display click count
function displayClickCount() {
    const countDisplay = document.getElementById('click-count');
    if (countDisplay) {
        countDisplay.innerText = `Click Count: ${clickCount}`;
    } else {
        const newCountDisplay = document.createElement('div');
        newCountDisplay.id = 'click-count';
        newCountDisplay.innerText = `Click Count: ${clickCount}`;
        document.body.appendChild(newCountDisplay);
    }
}

// Make eyes follow cursor movements
const eyes = document.createElement('div');
eyes.style.position = 'fixed';
eyes.style.top = '50%';
eyes.style.left = '50%';
eyes.style.transform = 'translate(-50%, -50%)';
eyes.style.height = '100px';
eyes.style.width = '100px';
eyes.style.backgroundImage = 'url(eyes.png)'; // Provide your eyes image

document.body.appendChild(eyes);
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    eyes.style.left = `${clientX}px`;
    eyes.style.top = `${clientY}px`;
});