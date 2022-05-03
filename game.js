/*jshint esversion: 6 */
const introSection = document.querySelector("#intro-section");
const gameSection = document.querySelector("#game-section");
const endSection = document.querySelector("#end-section");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const question = document.querySelector("#question");

const toggleBtn = Array.from(document.querySelectorAll(".toggle"));
const choices = Array.from(document.getElementsByClassName("choice-text"));

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];
let questions = [];

function toggle(event) {
  "use strict";
  event.preventDefault();
  switch (event.target.id) {
    case "startGame":
      introSection.classList.add("hidden");
      gameSection.classList.remove("hidden");
      break;
    case "startAgain":
      gameSection.classList.add("hidden");
      endSection.classList.remove("hidden");
      break;
    case "finishGame":
      endSection.classList.add("hidden");
      introSection.classList.remove("hidden");
  }
}

toggleBtn.forEach((button) => {
  "use strict";
  button.addEventListener("click", toggle);
});

fetch(
  "https://opentdb.com/api.php?amount=3&category=17&difficulty=easy&type=multiple"
)
  .then((res) => {
    'use strict';
    return res.json();
  })
  .then((loadedQuestions) => {
    "use strict";
    questions = loadedQuestions.results.map((loadedQuestion) => {
      const formattedQuestion = {
        question: loadedQuestion.question,
      };
      const answerChoices = [...loadedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
      answerChoices.splice(
        formattedQuestion.answer - 1,
        0,
        loadedQuestion.correct_answer
      );
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
    startGame();
  })
  .catch((err) => {
    'use strict';
    console.error(err);
  });

startGame = () => {
  'use strict';
  questionCounter = 0;
  score = 0;
  avaliableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  'use strict';
  if (avaliableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    gameSection.classList.add("hidden");
    endSection.classList.remove("hidden");
    return;
  }
  questionCounter++;
  progressText.innerText = questionCounter + "/" + MAX_QUESTIONS;
  const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
  currentQuestion = avaliableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion["choice" + number];
  });
  avaliableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
choices.forEach((choice) => {
  'use strict';
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 800);
  });
});
incrementScore = (num) => {
  'use strict';
  score += num;
  scoreText.innerText = score;
};
startGame();
