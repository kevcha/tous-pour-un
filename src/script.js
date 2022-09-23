import ScrollReveal from "scrollreveal";

ScrollReveal().reveal(".reveal", { delay: 200 });

const menuCheckbox = document.querySelector("#toggle-nav");
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    menuCheckbox.checked = false;
  });
});
