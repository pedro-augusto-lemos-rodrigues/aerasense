document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    let position = window.scrollY;

    if (position > 20) {
      navbar.style.width = "90%";
      navbar.style.top = "20px";
      navbar.style.borderRadius = "16px";
    } else {
      navbar.style.width = "100%";
      navbar.style.top = "0px";
      navbar.style.borderRadius = "0px";
    }
  });
});
