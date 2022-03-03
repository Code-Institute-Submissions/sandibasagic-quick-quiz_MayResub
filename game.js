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
