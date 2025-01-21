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


// Funcionalidad del header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menú móvil
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
