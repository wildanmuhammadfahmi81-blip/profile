// Scroll animation
const items = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });

items.forEach(i => observer.observe(i));

// Dark mode toggle
const toggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.onclick = () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  toggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
};
