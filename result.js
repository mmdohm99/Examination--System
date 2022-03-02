var res = localStorage.getItem("Final Score");
var final = document.getElementById("result");
if (res >= 60) {
  final.innerText = `Congratiulations your final score is ${res}% you Passed the Exam `;
} else {
  final.innerText = `Unfortunately your final score is ${res}% Keep going you will Pass Next Time `;
}
