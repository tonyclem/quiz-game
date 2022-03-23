const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question Arrays of Object
let questions = [];

// Fetch data
fetch("questions.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  })
  .catch((err) => {
    console.error(err);
  });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

// Created start a function
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  getNewQuestion();
};

// created getNewQuestion functions
getNewQuestion = () => {
  // If the length of the question is more than expected go to another end.index
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //   set localStorage
    localStorage.setItem("mostRecentScore", score);

    //go to the end page
    return window.location.assign("./end.html");
  }

  // increment question number
  questionCounter++;

  //   Update the progress bar
  progressText.innerHTML = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  // Update progressBar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // get question randomly
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // passed current question to availableQ and making it random as well
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  //   looping through the choices
  choices.forEach((choice) => {
    // wanted to get the dataset number
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  //  reduce the question that is already answer before by 1
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    // compared the answer values together
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    //        added class to selectedChoice parentElement
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);

      getNewQuestion();
    }, 1000);
  });
});

// incrementScore Function
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// startGame();
