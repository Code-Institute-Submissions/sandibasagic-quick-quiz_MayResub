// Show/Hide Sections
const introSectionRef = document.querySelector("#intro-section");
const gameSectionRef = document.querySelector("#game-section");
const endSectionRef = document.querySelector("#end-section");
const toggleBtnRef = Array.from(document.querySelectorAll(".toggle"));

toggleBtnRef.forEach((button) => {
  button.addEventListener("click", toggle);
});

function toggle(event) {
  event.preventDefault();
  console.log(event.target.id);
  if (event.target.id === "startGame") {
    // Hide Section
    introSectionRef.classList.add("hidden");
    // Show Section
    gameSectionRef.classList.remove("hidden");
  }
  
  // console.log(event.target.classList);
  else if (event.target.id === "startAgain") {
    // Hide Section
    gameSectionRef.classList.add("hidden");
    // Show Section
    endSectionRef.classList.remove("hidden")}
else if (event.target.id === "finishGame") {
    // Hide Section
    endSectionRef.classList.add("hidden");
    // Show Section
    introSectionRef.classList.remove("hidden")};
};

// Questions var
const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availiableQuestions = [];

let questions = [
    {
        question: "What day is today?",
        choice1: "Monday",
        choice2: "Friday",
        choice3: "Sunday",
        choice4: "Tuesday",
        answer: 1
    },
    {
        question: "When does the christmas come?",
        choice1: "January",
        choice2: "March",
        choice3: "December",
        choice4: "August",
        answer: 3
    },
    {
        question: "What is the capital city of England?",
        choice1: "Manchester",
        choice2: "Liverpool",
        choice3: "Newcastle",
        choice4: "London",
        answer: 4
    }
];

// Constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availiableQuestions = [...questions];
    getNewQuestion();
};
getNewQuestion = () => {
    if(availiableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // Go to the end page SECTION!
        gameSectionRef.classList.add("hidden");
        // Show Section
        endSectionRef.classList.remove("hidden");
        return
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availiableQuestions.length)
    currentQuestion = availiableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availiableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
        selectedChoice.parentElement.classList.add(classToApply);
        selectedChoice.parentElement.classList.remove(classToApply);
    
    getNewQuestion();
    })
})
startGame();