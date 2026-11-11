// Mobile menu
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
}
function closeMenu() {
  document.getElementById('nav-menu').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
document.getElementById('hamburger').addEventListener('click', toggleMenu);
document.getElementById('overlay').addEventListener('click', closeMenu);

// Reveal the "Oof, Mani!" sign after 5 seconds (home page only)
const sign = document.getElementById('sign');
if (sign) {
  setTimeout(() => {
    sign.style.opacity = 1;
  }, 5000);
}

// Fade sections in as they scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
