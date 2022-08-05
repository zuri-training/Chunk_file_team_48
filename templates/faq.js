const questionBox1 = document.querySelector("#question-box-1");
const answerBox1 = document.querySelector("#answer-box-1");
const addSign1 = document.querySelector("#add-sign-1");
const addSign2 = document.querySelector("#add-sign-2");
const addSign3 = document.querySelector("#add-sign-3");
const addSign4 = document.querySelector("#add-sign-4");
const minusSign1 = document.querySelector("#minus-sign-1");
const minusSign2 = document.querySelector("#minus-sign-2");
const minusSign3 = document.querySelector("#minus-sign-3");
const minusSign4 = document.querySelector("#minus-sign-4");
const questionBox2 = document.querySelector("#question-box-2");
const answerBox2 = document.querySelector("#answer-box-2");
const questionBox3 = document.querySelector("#question-box-3");
const answerBox3 = document.querySelector("#answer-box-3");
const questionBox4 = document.querySelector("#question-box-4");
const answerBox4 = document.querySelector("#answer-box-4");

addSign1.addEventListener("click", () => {
  questionBox1.style.display = "none";
  answerBox1.style.display = "block";
});

minusSign1.addEventListener("click", () => {
  questionBox1.style.display = "block";
  questionBox1.style.display = "flex";
  answerBox1.style.display = "none";
});

addSign2.addEventListener("click", () => {
  questionBox2.style.display = "none";
  answerBox2.style.display = "block";
});

minusSign2.addEventListener("click", () => {
  questionBox2.style.display = "block";
  questionBox2.style.display = "flex";
  answerBox2.style.display = "none";
});

addSign3.addEventListener("click", () => {
  questionBox3.style.display = "none";
  answerBox3.style.display = "block";
});

minusSign3.addEventListener("click", () => {
  questionBox3.style.display = "block";
  questionBox3.style.display = "flex";
  answerBox3.style.display = "none";
});

addSign4.addEventListener("click", () => {
  questionBox4.style.display = "none";
  answerBox4.style.display = "block";
});

minusSign4.addEventListener("click", () => {
  questionBox4.style.display = "block";
  questionBox4.style.display = "flex";
  answerBox4.style.display = "none";
});