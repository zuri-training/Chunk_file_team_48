const menuItems = document.querySelector("#menuItems");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const dropDown1 = document.querySelector("#drop-down-1");
const dropDown2 = document.querySelector("#drop-down-2");
const dropDownMenu1 = document.querySelector("#dropdown-menu-1");
const dropDownMenu2 = document.querySelector("#dropdown-menu-2");
const openArrows = document.querySelectorAll(".drop-down");
const dropDowns = document.querySelectorAll(".dropdown-menu");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menuItems.style.display = "block";
  });
}
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    menuItems.style.display = "flex";
    menuItems.style.display = "none";
  });
}




for (let i = 0; i < dropDowns.length; i++) {
  let arrow = openArrows[i];
  let dropDown = dropDowns[i];
  arrow.addEventListener("click", function () {
    dropDown.classList.toggle("show");
  });
}