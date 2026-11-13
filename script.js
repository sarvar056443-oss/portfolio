alert("Salom, JavaScript ishlayapti!");
// Navigatsiya havolalariga bosganda silliq pastga tushish
document.querySelectorAll('.nav-links a, .btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll paytida bo'limlarning paydo bo'lish animatsiyasi
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(section);
});
// Dark Mode (Tungi rejim) mantiqi
const themeToggleBtn = document.getElementById('theme-toggle');

// Tugma bosilganda
themeToggleBtn.addEventListener('click', () => {
  // body tegiga 'dark-mode' klassini qo'shadi yoki olib tashlaydi
  document.body.classList.toggle('dark-mode');
  
  // Tugma yozuvini o'zgartiradi
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.innerHTML = '☀️ Kunduzgi rejim';
  } else {
    themeToggleBtn.innerHTML = '🌙 Tungi rejim';
  }
});
