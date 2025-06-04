const allQuestions = [
  {
    question: "What is the correct file extension for Python files?",
    answers: [
      { text: ".pt", correct: false },
      { text: ".pyt", correct: false },
      { text: ".py", correct: true },
      { text: ".python", correct: false },
    ],
  },
  {
    question: "Which keyword defines a function in Python?",
    answers: [
      { text: "func", correct: false },
      { text: "def", correct: true },
      { text: "function", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "Which of the following is used to output text in Python?",
    answers: [
      { text: "echo()", correct: false },
      { text: "console.log()", correct: false },
      { text: "printf()", correct: false },
      { text: "print()", correct: true },
    ],
  },
  {
    question: "Which operator is used for exponentiation (power) in Python?",
    answers: [
      { text: "^", correct: false },
      { text: "**", correct: true },
      { text: "%", correct: false },
      { text: "//", correct: false },
    ],
  },
  {
    question: "Which of the following is a correct list in Python?",
    answers: [
      { text: "{1, 2, 3}", correct: false },
      { text: "(1, 2, 3)", correct: false },
      { text: "[1, 2, 3]", correct: true },
      { text: "<1, 2, 3>", correct: false },
    ],
  },
  {
    question: "How do you insert comments in Python code?",
    answers: [
      { text: "// comment", correct: false },
      { text: "# comment", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "/* comment */", correct: false },
    ],
  },
  {
    question: "What is the data type of '10'?",
    answers: [
      { text: "String", correct: true },
      { text: "Integer", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: false },
    ],
  },
  {
    question: "What symbol is used to multiply numbers in Python?",
  answers: [
    { text: "*", correct: true },
    { text: "+", correct: false },
    { text: "/", correct: false },
    { text: "-", correct: false },
    ],
  },
  {
    question: "How do you start a for loop in Python?",
    answers: [
      { text: "for i in range(5):", correct: true },
      { text: "for (i=0; i<5; i++)", correct: false },
      { text: "foreach i in range(5)", correct: false },
      { text: "loop i from 0 to 5", correct: false },
    ],
  },
  {
    question: "Which function returns the length of a list in Python?",
    answers: [
      { text: "count()", correct: false },
      { text: "size()", correct: false },
      { text: "length()", correct: false },
      { text: "len()", correct: true },
    ],
  },
  {
    question: "How do you declare a variable with the value 10?",
    answers: [
      { text: "var x = 10", correct: false },
      { text: "x = 10", correct: true },
      { text: "int x = 10", correct: false },
      { text: "declare x = 10", correct: false },
    ],
  },
  {
    question: "What is the output of: print(2 == 2)?",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "2", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What will be the output of: print(type(3.14))",
    answers: [
      { text: "<class 'float'>", correct: true },
      { text: "<class 'int'>", correct: false },
      { text: "<class 'str'>", correct: false },
      { text: "<class 'bool'>", correct: false },
    ],
  },
  {
    question: "How do you take user input in Python?",
    answers: [
      { text: "get()", correct: false },
      { text: "input()", correct: true },
      { text: "scan()", correct: false },
      { text: "read()", correct: false },
    ],
  },
  {
    question: "Which of these is a valid Python variable name?",
    answers: [
      { text: "2value", correct: false },
      { text: "value_2", correct: true },
      { text: "value-2", correct: false },
      { text: "value 2", correct: false },
    ],
  },
  {
    question: "What is the result of 5 // 2 in Python?",
    answers: [
      { text: "2", correct: true },
      { text: "2.5", correct: false },
      { text: "3", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "How do you create a dictionary in Python?",
    answers: [
      { text: "{} with key: value pairs", correct: true },
      { text: "[] with values", correct: false },
      { text: "() with key, value", correct: false },
      { text: "<> with key=value", correct: false },
    ],
  },
  {
    question: "Which function returns the largest value?",
    answers: [
      { text: "max()", correct: true },
      { text: "top()", correct: false },
      { text: "high()", correct: false },
      { text: "maximum()", correct: false },
    ],
  },
  {
    question: "What will print('Hello' + 'World') output?",
    answers: [
      { text: "HelloWorld", correct: true },
      { text: "Hello World", correct: false },
      { text: "Hello+World", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "What is the output of: 3 * 'Hi'?",
    answers: [
      { text: "HiHiHi", correct: true },
      { text: "Hi*3", correct: false },
      { text: "Error", correct: false },
      { text: "3Hi", correct: false },
    ],
  },
];

const startScreen = document.getElementById("start-screen");
const questionCountSelect = document.getElementById("questionCount");
const startBtn = document.getElementById("startBtn");

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// Load sounds (replace with your actual file paths)
const timeoutSound = new Audio("timeout.mp3");
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

startBtn.addEventListener("click", () => {
  const numQuestions = parseInt(questionCountSelect.value);
  startQuiz(numQuestions);
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  resultContainer.classList.add("hide");
  startScreen.classList.remove("hide");
});

function startQuiz(numQuestions) {
  startScreen.classList.add("hide");
  quizContainer.classList.remove("hide");
  score = 0;
  currentQuestionIndex = 0;
  shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);
  nextButton.classList.add("hide");
  showQuestion();
  updateProgressBar();
}

function showQuestion() {
  resetState();
  updateProgressBar();

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });

  timeLeft = 15;
  timerElement.innerText = timeLeft;
  timerElement.classList.remove("warning");
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerElement.innerText = timeLeft;
  if (timeLeft === 3) {
    timerElement.classList.add("warning");
    timeoutSound.play();
  }
  if (timeLeft <= 0) {
    clearInterval(timer);
    timeoutSound.pause();
    timeoutSound.currentTime = 0;
    showCorrectAnswer();
    nextButton.classList.remove("hide");
  }
}

function resetState() {
  clearInterval(timer);
  timeoutSound.pause();
  timeoutSound.currentTime = 0;
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  clearInterval(timer);
  timeoutSound.pause();
  timeoutSound.currentTime = 0;

  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    score++;
    correctSound.play();
  } else {
    wrongSound.play();
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  nextButton.classList.remove("hide");
  updateProgressBar();
}

function setStatusClass(element, correct) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function showCorrectAnswer() {
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
}

function updateProgressBar() {
  const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
}

function showResult() {
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.innerText = `You scored ${score} out of ${shuffledQuestions.length}`;
  progressBar.style.width = "100%";
}
