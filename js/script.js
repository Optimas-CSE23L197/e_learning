const menuElement = document.querySelector(".nav_menu ul");
document.getElementById("hambarger").addEventListener("click", () => {
  menuElement.classList.toggle("show_menu");
});
