'use strict';
import {SKIP_THE_QUESTION,
ANSWERS_LIST_ID,
NEXT_QUESTION_BUTTON_ID,
SUBMIT_BUTTON_ID,
USER_INTERFACE_ID
 } from '../constants.js';
import { nextQuestion } from '../pages/questionPage.js';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <h1 id="question">${question}</h1>
  
  <ul id="${ANSWERS_LIST_ID}">
  </ul>
  
  <button id="${NEXT_QUESTION_BUTTON_ID}" disabled = 'disabled'>
  Next question
  </button>
  <button id="${SKIP_THE_QUESTION}">
  Skip
  </button>
  <button id="${SUBMIT_BUTTON_ID}">
  Submit
  </button>
  
    `;
    element.style.padding = '0';
    
    return element;
  };
 
  export const transitionToPage = function() {
    document.getElementById(USER_INTERFACE_ID).style.opacity = 0
    setTimeout(function() { 
        document.getElementById(USER_INTERFACE_ID).style.opacity = 1
    }, 1000)
  }
  
  
