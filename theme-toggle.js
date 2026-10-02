const themeToggle = document.querySelector('#theme-btn');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.setAttribute('aria-pressed', 'true');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    const isDark = document.body.classList.contains('dark-theme');

    themeToggle.setAttribute('aria-pressed', isDark);

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});