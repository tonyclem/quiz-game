'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const currentQuestionValue = parseInt(localStorage.getItem("currentQuestion"));
  if(!isFinite(currentQuestionValue) || currentQuestionValue == 0 || currentQuestionValue > 9) {
    
    const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  } else {
   quizData.currentQuestionIndex = currentQuestionValue;
    initQuestionPage();
  }
};

const startQuiz = () => {
  // change current score to 0
  localStorage.setItem('currentScore', 0);
  initQuestionPage();
};
