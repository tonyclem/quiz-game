'use strict';
import {
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_THE_QUESTION,
  ANSWERS_LIST_ID,
  SUBMIT_BUTTON_ID,
} from '../constants.js';
import {createQuestionElement} from '../views/questionView.js';
import {ShowRightAnswer, getAnswerElements} from '../views/answerView.js'
import { quizData } from '../data.js';
import { incrementQuestionIndex } from '../data.js';
import { viewResult } from './resultPage.js';
import {transitionToPage} from '../views/questionView.js';
export const initQuestionPage = () => {
  
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]
  const userInterface = document.getElementById(USER_INTERFACE_ID)
  userInterface.innerHTML = '';
  
  const questions = quizData.questions
  const questionElement = createQuestionElement(currentQuestion.text)
  userInterface.appendChild(questionElement); 
  
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID)
  if(quizData.currentQuestionIndex === questions.length-1){
    nextQuestionButton.style.display = "none"
  }
  const answerElement = getAnswerElements(answersListElement, nextQuestionButton)
  userInterface.appendChild(answerElement)  
  
  const answerElementList = document.querySelectorAll('.answers')

  const submitButton = document.getElementById(SUBMIT_BUTTON_ID)
  if(quizData.currentQuestionIndex !== questions.length-1){
  submitButton.style.display = "none"
}
  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .addEventListener('click', nextQuestion);
  document
  .getElementById(SKIP_THE_QUESTION)
  .addEventListener('click', () => ShowRightAnswer(answerElementList))
  document
  .getElementById(SUBMIT_BUTTON_ID)
  .addEventListener('click', viewResult)



};

export const nextQuestion = () => {
  incrementQuestionIndex();
  initQuestionPage();
  transitionToPage();
};










