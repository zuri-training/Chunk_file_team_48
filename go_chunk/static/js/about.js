const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

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

loginBtn.addEventListener("click", () => {
    loginBtn.style.opacity = "0.5";
    loginBtn.disabled = "true";
  });
  
