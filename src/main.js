import '../src/input.css';

document.getElementById('menuButton').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const isHidden = mobileMenu.classList.toggle('hidden');

    // Atualizar aria-expanded
    this.setAttribute('aria-expanded', !isHidden);

    // Alternar ícone do botão
    const svg = this.querySelector('svg');
    if (isHidden) {
        svg.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    } else {
        svg.innerHTML =
            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    header.classList.remove('opacity-0', 'translate-y-[-20px]');
    header.classList.add('opacity-100', 'translate-y-0');
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
