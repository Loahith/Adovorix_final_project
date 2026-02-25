const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navbar ul");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting LogerTech. We will respond shortly.");
    form.reset();
  });
}