'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
  export const incrementQuestionIndex = () =>  {
    const questions = quizData.questions
  if(quizData.currentQuestionIndex === questions.length-1){
    quizData.currentQuestionIndex = 0;
  } else {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  
  }  
  
  localStorage.setItem("currentQuestion", quizData.currentQuestionIndex);
  }

  const getCurrentScore = () => {
    const currentQuestionValue = parseInt(localStorage.getItem("currentQuestion"));
    if(currentQuestionValue == 0 || currentQuestionValue > 9) 
    {
      return 0;
    } else {
    const storedScoreValue = localStorage.getItem("currentScore");
    // // get the value of current question
    let currentScoreValue = 0;
    if (storedScoreValue != null) {
      currentScoreValue = parseInt(storedScoreValue);
    }
    return currentScoreValue;
  }
  }

export const quizData = {
  currentQuestionIndex: 0,
  score: getCurrentScore(),
  
  questions: [
    {
      text: 'Which typically Dutch dish originates from Rotterdam?',
      answers: {
        a: 'Poffertjes',
        b: 'Erwtensoep',
        c: 'Kapsalon',
        d: 'Bamischijf'
      },
      correct: 'c',
      selected: null,
      
    },
    {
      text: 'What is the nickname of the Rotterdam artwork Santa Claus?',
      answers: {
        a: 'Weihnachtsmann',
        b: 'The buttplug Gnome',
        c: 'Papai Noel',
        d: 'Kris Kringle',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'When a Dutchman is talking about a spreeuw, which bird does he refer to??',
      answers: {
        a: 'sparrow',
        b: 'nutcracker',
        c: 'jackdaw',
        d: 'starling',
      },
      correct: 'd',
      selected: null,
    },
    {
      text: 'Which saint is celebrated on November 11th?',
      answers: {
        a: 'Sint Michielsgestel',
        b: 'Sint Nicolaas (Saint Nicholas)',
        c: 'Sint Maarten (Saint Martin)',
        d: 'Sint Oedenrode',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What is the Dutch city of light?',
      answers: {
        a: 'Maastricht',
        b: 'Breda',
        c: 'Eindhoven',
        d: 'Rotterdam',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Cheese is NOT made in which of these cities?',
      answers: {
        a: 'Gouda',
        b: 'Alkmaar',
        c: 'Stolwijk',
        d: 'Leerdam',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'Who is the most popular saint in the Netherlands?',
      answers: {
        a: 'Saint Valentine',
        b: 'Saint Juttemis',
        c: 'Saint Patrick',
        d: 'Saint Nicholas',
      },
      correct: 'd',
      selected: null,
    },
    {
      text: 'The Netherlands is also known as Holland. What did Holland originally mean?',
      answers: {
        a: 'Hollow land',
        b: 'Woodland',
        c: 'Running land',
        d: 'Swampy land',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'The Netherlands are always associated with one kind of flower. Which one?',
      answers: {
        a: 'Tulips',
        b: 'Roses',
        c: 'Daisies',
        d: 'Hyacinths',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'How long have the Dutch been making cheese?',
      answers: {
        a: '1000 years',
        b: '900 years',
        c: '50 years',
        d: '1600 years',
      },
      correct: 'd',
      selected: null,
    },
  ],
};
