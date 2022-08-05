const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const signupBtn = document.querySelector(".signup--btn");

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

signupBtn.addEventListener("mouseover", () => {
  signupBtn.style.backgroundColor = "#957032";
});

signupBtn.addEventListener("mouseout", () => {
  signupBtn.style.backgroundColor = "#FFC056";
});

signupBtn.addEventListener("click", () => {
  signupBtn.style.backgroundColor = "#FFD58E";
  signupBtn.disabled = "true";
});

loginBtn.addEventListener("click", () => {
  loginBtn.style.opacity = "0.5";
  loginBtn.disabled = "true";
});
