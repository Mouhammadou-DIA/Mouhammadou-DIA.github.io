const roles = [
  "Data Scientist",
  "Statistical Analyst",
  "NLP Engineer",
  "Data Engineer",
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
    setTimeout(type, 45);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
    setTimeout(type, 75);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".card, .skill-group, .stat, .timeline-item, .about-text, .about-stats")
    .forEach((el) => { el.classList.add("fade-in"); observer.observe(el); });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.style.color = a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
    });
  });
});
