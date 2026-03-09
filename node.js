const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  dot.style.left = mx + "px";
  dot.style.top = my + "px";
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => io.observe(el));

// Skill bars animate on scroll
const skillBars = document.querySelectorAll(".skill-bar");
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("animated"), 200);
      }
    });
  },
  { threshold: 0.3 },
);
skillBars.forEach((b) => barObserver.observe(b));

// Form submit
document.querySelector(".form-btn").addEventListener("click", () => {
  const inputs = document.querySelectorAll(".form-input, .form-textarea");
  let filled = true;
  inputs.forEach((i) => {
    if (!i.value.trim()) filled = false;
  });
  if (!filled) {
    alert("Please fill in all fields.");
    return;
  }
  document.querySelector(".form-btn").textContent = "Message sent ✓";
  document.querySelector(".form-btn").style.background = "#2a5cff";
  inputs.forEach((i) => (i.value = ""));
});
