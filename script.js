// Typewriter effect
const roles = [
  "Data Scientist",
  "Data Engineer",
  "NLP Engineer",
  "ML Engineer",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById("typed-text");

function type() {
  const current = roles[roleIndex];
  if (deleting) {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 50);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 80);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 600);

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.12 }
  );

  document.querySelectorAll(".card, .skill-group, .stat, .about-text, .about-stats").forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.style.color = a.getAttribute("href") === `#${current}` ? "var(--text)" : "";
    });
  });
});
