const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++; // increment 
  setNextQuestion(); // get the current Question or restart
});

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
  // resetState
  resetState();
  // called show question function here and passing the shuffled/question/Array with the  current index
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// function for showQuestion
function showQuestion(question) {
  // passing the question to the question Element, targeting the question inside the question Array
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    // iterating through the answers arrayOfObj
    const button = document.createElement("button"); // created a button
    button.innerText = answer.text; // set the button innerText to be text values
    button.classList.add("btn");
    if (answer.correct) {
      // if the answer is true
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide"); // to hide
  while (answerButtonsElement.firstChild) {
    // loop through and if there's a child in the element
    answerButtonsElement.removeChild(answerButtonsElement.firstChild); // remove it
  }
}

function selectAnswer(e) {
  const selectedButton = e.target; // what event will click on
  const correct = selectedButton.dataset.correct; // set the selected button to correct
  setStatusClass(document.body, correct); // setStatus Function body
  Array.from(answerButtonsElement.children).forEach((button) => {
    // set it to array
    setStatusClass(button, button.dataset.correct); // setStatusClass
  });
  nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element); // clearStatus Function
  if (correct) {
    // if true
    element.classList.add("correct");
  } else {
    // or is false
    element.classList.add("wrong");
  }
}

// this function clear status class
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

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
