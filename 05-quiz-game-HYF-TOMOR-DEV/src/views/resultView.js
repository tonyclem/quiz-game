'use strict';
import {
 } from '../constants.js';
 import { quizData } from '../data.js'

 
 export const createResultPage = () => {
  const clientScore = quizData.score
  const resultMessage = document.createElement('div');
  resultMessage.innerHTML = `
  <h1 class="final-score"> Your score is ${clientScore} 
  from 10 </h1>
  `
  return resultMessage
}
