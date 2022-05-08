const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  //   added hide style
  startButton.classList.add("hide");
  //   remove the hide style
  questionContainerElement.classList.remove("hide");
  //   sort the question
  shuffledQuestions = questions.sort(() => Math.random() - 0.5); // sort from 0.5 less down
  //   currentQuestionIndex of question
  currentQuestionIndex = 0;
  //   calling the function inside
  setNextQuestion();
}

function setNextQuestion() {
  // called show question function here and passing the shuffled/question/Array with the  current index 
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// function for showQuestion
function showQuestion(question) {
    // passing the question to the question Element, targeting the question inside the question Array
  questionElement.innerText = question.question;
}

function selectAnswer() {}

// this question is a global variable can be accessed anywhere within the functions
const questions = [
  {
    question: "what is 2 + 2 ?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
];
