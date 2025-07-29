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
const words = ["I am Avinashh", "I am a Full Stack Developerr", "I am a Web Developerr"];
let i = 0;
let j = 0;
let isDeleting = false;
let currentWord = '';
let typingSpeed = 120; // typing speed

const target = document.getElementById("typewriter-text");

function typeEffect() {
  currentWord = words[i];

  if (!isDeleting) {
    target.textContent = currentWord.substring(0, j++);
  } else {
    target.textContent = currentWord.substring(0, j--);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    typingSpeed = 1000; // wait before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    typingSpeed = 200; // wait before typing next
  } else {
    typingSpeed = isDeleting ? 60 : 120;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});