var quiz = [];
var takenAnswers = [];
var randomQuiz = [];
var quistionNumber = document.getElementById("No");
var quistion = document.getElementById("Q");
var answer = document.getElementById("options-Container");
var markBord = document.getElementById("sidebar");
var mark = document.getElementById("mark");
var quistionIndex;
var j = 0;
var L1 = document.getElementById("l1");
var L2 = document.getElementById("l2");
var L3 = document.getElementById("l3");
var L4 = document.getElementById("l4");
var score = 0;
var timer_ = document.getElementById("time");
var radioBtns = document.querySelectorAll("input");

function quistions(Q, options, answers) {
  this.Q = Q;
  this.options = options;
  this.answers = answers;
}

function addQuistions(Q, options, answers) {
  var qq = new quistions(Q, options, answers);
  quiz.push(qq);
}
addQuistions("11-3 = ?", [3, 4, 5, 8], 3);
addQuistions(
  "What is the name of the planet we live in ?",
  ["Earth", "Sun", "Mars", "Jupiter"],
  0
);
addQuistions("50/2 = ?", [25, 20, 30, 35], 0);
addQuistions(
  "What is the fasetst animal on the land ?",
  ["Lion", "Jagouer", "Rabbit", "Deer"],
  1
);
addQuistions(
  "What is the oldest culture in the earth ?",
  ["Romania", "Egyption", "Sumerian", "Maya"],
  1
);
///////////////////////////////////////////////////////////////////
function setq(j) {
  quistion.innerHTML = randomQuiz[j].Q;
  L1.innerHTML = randomQuiz[j].options[0];
  L2.innerHTML = randomQuiz[j].options[1];
  L3.innerHTML = randomQuiz[j].options[2];
  L4.innerHTML = randomQuiz[j].options[3];
  for (var z = 0; z < radioBtns.length; z++) {
    if (radioBtns[z].value == takenAnswers[j]) {
      radioBtns[z].checked = true;
    } else {
      radioBtns[z].checked = false;
    }
  }
}
/////////////////////////////////////////////////////////////////////////
function randomize() {
  if (randomQuiz.length !== quiz.length) {
    quistionIndex = quiz[Math.floor(Math.random() * quiz.length)];
    if (!randomQuiz.includes(quistionIndex)) {
      randomQuiz.push(quistionIndex);
    }
    randomize();
  }
}
randomize();
// console.log(randomQuiz);
/////////////////////////////////////////////////////////////

function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer_.innerText = `${minutes}:${seconds}`;

    if (--timer < 0) {
      timer = duration;
    }
    if (timer == 0) {
      submit();
    }
  }, 1000);
}
startTimer(800);

//////////////////////////////////////////////////////////////////////////
quistionNumber.innerHTML = `Question ${1} / ${quiz.length} `;
setq(j);

// console.log(randomQuiz[1])
///////////////////////////////////////////////////////////////////////////
function next() {
  if (j < randomQuiz.length - 1) {
    j++;
    // console.log(j);
  }
  setq(j);
  // console.log(j);

  quistionNumber.innerHTML = `Question ${j + 1} / ${quiz.length} `;
  // console.log(takenAnswers);
}

function prev() {
  if (j > 0) {
    j--;
    // console.log(j);
  }
  // console.log(j);
  setq(j);

  quistionNumber.innerHTML = `Question ${j + 1} / ${quiz.length} `;
  console.log(takenAnswers);
}
/////////////////////////////////////////////////////////////////////////////
var index = [];
mark.addEventListener("click", function () {
  // console.log(index);
  //   console.log("hi");
  if (!index.includes(j)) {
    index.push(j);
    x = document.createElement("div");
    x.innerHTML = j + 1;
    x.setAttribute("id", `${j}`);
    x.setAttribute("class", "marked");
    x.setAttribute("name", "address");
    // console.log(j);
    console.log(index)
    x.setAttribute("onclick", `show(${j})`);
    document.getElementById("sidebar").appendChild(x);
  }
});

function show(x) {
  // console.log(x);
  setq(x);
  j = x;
  var s = document.getElementById(`${x}`);
  s.remove();
  index.splice(index.indexOf(x), 1);
  quistionNumber.innerHTML = `Question ${j + 1} / ${quiz.length} `;
  ;
}
/////////////////////////////////////////////////////////////////////////////

function pick(event) {
  var data = document.getElementsByTagName("input");
  for (var i = 0; i < data.length; i++) {
    if (data[i].checked) {
      takenAnswers[j] = event;
    }
  }
  //   console.log(takenAnswers);
}

function finalResult() {
  for (var i = 0; i <= randomQuiz.length - 1; i++) {
    if (takenAnswers[i] == randomQuiz[i].answers) {
      score++;
    }
  }

  return score;
}

function submit() {
  finalscore = (finalResult() * 100) / quiz.length;
  location.href = "/result.html";
  //   console.log(finalscore);
  localStorage.setItem("Final Score", finalscore);
}
