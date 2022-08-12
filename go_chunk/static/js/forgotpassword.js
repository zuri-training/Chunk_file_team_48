const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const resetBtn = document.querySelector(".forgotpassword--btn");

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

resetBtn.addEventListener("mouseover", () => {
  resetBtn.style.backgroundColor = "#957032";
});

resetBtn.addEventListener("mouseout", () => {
  resetBtn.style.backgroundColor = "#FFC056";
});

resetBtn.addEventListener("click", () => {
  resetBtn.style.backgroundColor = "#FFD58E";
  resetBtn.disabled = "true";
});

loginBtn.addEventListener("click", () => {
  loginBtn.style.opacity = "0.5";
  loginBtn.disabled = "true";
});
