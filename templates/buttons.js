const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const chunkBtn = document.querySelector(".chunk--btn");

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

chunkBtn.addEventListener("mouseover", () => {
  chunkBtn.style.backgroundColor = "#AA8039";
});

chunkBtn.addEventListener("mouseout", () => {
  chunkBtn.style.backgroundColor = "#FFC056";
});

chunkBtn.addEventListener("click", () => {
  chunkBtn.style.backgroundColor = "#FFD58E";
  chunkBtn.disabled = "true";
});

loginBtn.addEventListener("click", () => {
  loginBtn.style.opacity = "0.5";
  loginBtn.disabled = "true";
});
