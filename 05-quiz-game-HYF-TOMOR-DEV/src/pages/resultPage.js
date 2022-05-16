'use strict';
import { USER_INTERFACE_ID,
 } from '../constants.js';
import { incrementQuestionIndex } from '../data.js';
import { createResultPage } from '../views/resultView.js';

export const viewResult = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID)
  userInterface.innerHTML = '';

  const createResultMessage = createResultPage()
  userInterface.appendChild(createResultMessage)
  incrementQuestionIndex()
  transitionToPage();
}
