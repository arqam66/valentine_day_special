// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashHearts(() => {
            document.getElementById('question').innerHTML = "Yay! You made me the happiest! 💖";
            document.getElementById('options').style.display = 'none';
            document.getElementById('main-image').src = 'nom.png'; // Change to happy couple image
        });
    } else if (option === 'no') {
        const noButton = document.getElementById('no-button');
        noButton.innerText = 'Yes!';
        noButton.style.backgroundColor = '#c2185b'; // Change button color
        noButton.style.transform = 'scale(1.2)';
        
        const yesButton = document.getElementById('yes-button');
        yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 1.2}px`;
    }
}

// Function to flash hearts animation
function flashHearts(callback) {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-flash';
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartsContainer.remove();
        callback?.();
    }, 3000);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // Add any initial setup here
});