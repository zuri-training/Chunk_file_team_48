const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const signinBtn = document.querySelector(".signin--btn");

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

signinBtn.addEventListener("mouseover", () => {
  signinBtn.style.backgroundColor = "#957032";
});

signinBtn.addEventListener("mouseout", () => {
  signinBtn.style.backgroundColor = "#FFC056";
});

signinBtn.addEventListener("click", () => {
  signinBtn.style.backgroundColor = "#FFD58E";
  signinBtn.disabled = "true";
});

loginBtn.addEventListener("click", () => {
  loginBtn.style.opacity = "0.5";
  loginBtn.disabled = "true";
});
