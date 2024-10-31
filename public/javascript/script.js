document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  const nav = document.querySelector(".nav_list");
  const container = document.querySelector(".container");

  if (toggler && nav) {
    toggler.addEventListener("click", function () {
      nav.classList.toggle("active");
      container.classList.toggle("active");
    });
  } else {
    console.error("Navbar elements not found");
  }
});
