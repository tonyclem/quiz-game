'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="front-page">
  <h1>Welcome</h1>
  <h2>Do you know about Dutch culture? </h2>
  <p>Test your knowledge</p>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  </div>`;
  return element;
};
