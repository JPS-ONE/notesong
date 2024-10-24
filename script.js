const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const glowLetters = 'NOTESONG';  
const rainContainer = document.getElementById('letterRain');

function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.style.left = `${Math.random() * 100}%`;
    letter.style.animationDuration = `${Math.random() * 5 + 5}s`;
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    letter.textContent = randomLetter;

    if (glowLetters.includes(randomLetter)) {
        letter.classList.add('glow');
    }

    rainContainer.appendChild(letter);

    setTimeout(() => {
        letter.remove();
    }, 10000);
}

setInterval(createLetter, 100);
