var navLinks = document.getElementById("nav-links");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}



const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const messageBtn = document.querySelector(".contact--form--btn");

registerBtn.addEventListener("mouseover", () => {
  registerBtn.style.backgroundColor = "#1F378C";
});
registerBtn.addEventListener("mouseout", () => {
  registerBtn.style.backgroundColor = "#2645AF";
});
registerBtn.addEventListener("click", () => {
  registerBtn.style.backgroundColor = "#5170D9";
  registerBtn.disabled = "true";
});

messageBtn.addEventListener("mouseover", () => {
  messageBtn.style.backgroundColor = "#957032";
});

messageBtn.addEventListener("mouseout", () => {
  messageBtn.style.backgroundColor = "#FFC056";
});

messageBtn.addEventListener("click", () => {
  messageBtn.style.backgroundColor = "#FFD58E";
  messageBtn.disabled = "true";
});

loginBtn.addEventListener("click", () => {
  loginBtn.style.opacity = "0.5";
  loginBtn.disabled = "true";
});


