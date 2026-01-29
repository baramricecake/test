document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const generateBtn = document.getElementById('generate');
    const numbersContainer = document.getElementById('numbers');

    // --- Theme Switcher ---
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // --- Lotto Number Generator ---
    const generateLottoNumbers = () => {
        numbersContainer.innerHTML = ''; // Clear previous numbers
        const lottoNumbers = new Set();

        while (lottoNumbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoNumbers.add(randomNumber);
        }

        lottoNumbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('number');
            const colorClass = `ball-color-${(index % 5) + 1}`;
            ball.classList.add(colorClass);
            ball.textContent = number;
            ball.style.animationDelay = `${index * 0.1}s`;
            numbersContainer.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', generateLottoNumbers);

    // Initial generation
    generateLottoNumbers();
});
