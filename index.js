document.addEventListener("DOMContentLoaded", function () {
  const navToggleBtn = document.querySelector(".nav__toggle-btn");
  const closeBtn = document.querySelector(".close");
  const navLinks = document.querySelector(".show__navlinks");

  navToggleBtn.addEventListener("click", () => {
    navLinks.style.display = "inline-block";
    navToggleBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    navLinks.style.display = "none";
    navToggleBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});
