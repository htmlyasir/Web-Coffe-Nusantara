// Toggle class active
const menu = document.querySelector(".menu");
// ketika hamburger menu di klik
document.querySelector(".toggle").onclick = () => {
  menu.classList.toggle("active");
};

// klik di luar hamburger untuk menghilangkan nav
const toggle = document.querySelector(".toggle");
//
document.addEventListener("click", function (event) {
  if (!toggle.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("active");
  }
});
