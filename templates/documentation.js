const menuItems = document.querySelector("#menuItems");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const dropDown1 = document.querySelector("#drop-down-1");
const dropDown2 = document.querySelector("#drop-down-2");
const dropDownMenu1 = document.querySelector("#dropdown-menu-1");
const dropDownMenu2 = document.querySelector("#dropdown-menu-2");

menuIcon.addEventListener("click", () => {
  menuItems.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menuItems.style.display = "flex";
  menuItems.style.display = "none";
});

menuIcon.addEventListener("click", () => {
  menuItems.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menuItems.style.display = "flex";
  menuItems.style.display = "none";
});

// When the user clicks on the button,
// toggle between hiding and showing the dropdown content
// function myFunction() {
//   document.getElementById("dropdown-menu-1").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".drop-down")) {
//     var dropdowns = document.getElementsByClassName("dropdown-menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

const openArrows = document.querySelectorAll('.drop-down')

const dropDowns = document.querySelectorAll('.dropdown-menu')

for (let i = 0; i < dropDowns.length; i++) {
  let arrow = openArrows[i]
  let dropDown = dropDowns[i]
  arrow.addEventListener('click', function() {
    dropDown.classList.toggle('show')
  })
}