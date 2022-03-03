function toggle() {
    const sectionHome = document.getElementById('sectionHome');
    if(sectionHome.style.display === "none") {
        sectionHome.style.display = "block";
    }
    else {
        sectionHome.style.display = "none";
    }
};
const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));
let currentQuestion = {};
let acceptingAnswers = true;
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
]
