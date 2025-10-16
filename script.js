// 🍔 HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// when hamburger is clicked — show/hide menu
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
};

// when any menu link is clicked — close menu
document.querySelectorAll(".nav-links a").forEach(link => {
  link.onclick = () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  };
});

// 🌗 DARK / LIGHT MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeIcon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// 🧊 NAVBAR GLASS EFFECT ON SCROLL
const navbar = document.getElementById("navbar");
window.onscroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
};
