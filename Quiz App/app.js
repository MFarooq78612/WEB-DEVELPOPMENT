const questions = [
  {
    que: "Cave Hira is in the _________ mountain.",
    a: "As-Safa",
    b: " Sil",
    c: "Uhud",
    d: "An-Noor",
    correct: "d",
  },

  {
    que: "Name the wife of Prophet Muhammad (PBUH) who was daughter of Umar Farooq (R.A)?",
    a: "Aisha (R.A)",
    b: "Juwairyyah (R.A)",
    c: "Hafsah (R.A)",
    d: "Maimoonah (R.A)",
    correct: "c",
  },

  {
    que: "The Angel who delivered messages to Prophet Muhammad (PBUH) from Allah was?",
    a: "Jibrael (A.S)",
    b: "Mikael (A.S)",
    c: "Izraeel (A.S)",
    d: "Israfeel (A.S)",
    correct: "a",
  },
  {
    que: "Prophet Muhammad (PBUH) lived in Madina for __________ years?",
    a: "8",
    b: "9",
    c: "10",
    d: "11",
    correct: "c",
  },
  {
    que: "Which country is called the “Land of Prophets”?",
    a: "Saudi Arabia",
    b: "Syria",
    c: " Palestine",
    d: " Iraq",
    correct: "c",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const QuesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  console.log(data);
  QuesBox.innerText = `${index + 1}) ${data.que}`;

  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((inputs) => {
    if (inputs.checked) {
      answer = inputs.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((inputs) => {
    inputs.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
  <h3>Thanks for playing the quiz.</h3>
  <h2>${right}/${total} are correct</h2>
  </div>
  `;
};
loadQuestion();
