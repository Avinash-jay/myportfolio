document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  document.querySelectorAll('.skill .fill').forEach(el => {
    const width = el.style.width;
    el.style.setProperty('--fill-width', width);
  });

  // Smooth scroll for nav links
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Use your existing topButton
  const topButton = document.querySelector('.topButton');
  if (topButton) {
    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        topButton.style.display = 'flex';
      } else {
        topButton.style.display = 'none';
      }
    });
  }
});
function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("mobile-hidden");
}