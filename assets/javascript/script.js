// possible variables to get by ID 
var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var results = document.getElementById("results")
var submitButton= document.getElementById("submitButton")

var choice1 = document.getElementById("1")
var choice2 = document.getElementById("2")
var choice3 = document.getElementById("3")
var choice4 = document.getElementById("4")



//BUILD TIMER
const startingSeconds = 60;
var timer = 60;
// var time = startingSeconds;

var countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);
function updateCountdown() {
  if (timer <= startingSeconds) {
    countdownEl.innerHTML = timer;
    timer--;
  }
}
// function updateCountdown() {
//   var seconds = time % 60;
// //timer starts displaying at 0, hence this bit to adjust for that so it starts at 60
//   seconds = seconds < 1 ? '6' + seconds : seconds;
  
//   countdownEl.innerHTML = (seconds);
//   time--;
// }


var scoreContainer = getElementById("results")
//possible querySelectors:
var userInitials = document.querySelector("#userInitials");

// an array for the questions
var quizQuestions = [  
  {
    question: "Commonly used data types do NOT include:",
    answers: {
      1: "strings",
      2: "booleans",
      3: "alerts",
      4: "numbers",
    },
    correctAnswer: "3"
  },
  {
    question: "The condition in an if / else statement is enclosed in __________.",
    answers: {
      1: "quotes",
      2: "curly brackets",
      3: "parentheses",
      4: "square brackets",
    },
    correctAnswer: "2"
  },
  {
    question: "Arrays in JavaScript can be used to store __________.",
    answers: {
      1: "numbers and strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above",
    },
    correctAnswer: "4"
  },
  {
    question: "Who invented JavaScript?",
    answers: {
      1: "Theodore Mojava",
      2: "Brandon Eich",
      3: "Thomas Anderson",
      4: "artificial intelligence",
    },
    correctAnswer: "2"
  },
  {
    question: "String values must be enclosed within ___________ when being assigned to variables.",
    answers: {
      1: "commas",
      2: "curly brackets",
      3: "quotes",
      4: "parentheses",
    },
    correctAnswer: "3"
  }
]


//POSSIBLE FUNCTIONS

function startGame(){}

function showResults(){}

buildQuiz();
// submit button to go to results screen
submitButton.addEventListener('click', showResults);

function buildQuiz(){
//variable to hold questions and answers depending on quiz block
var htmlOutput = [];

// need  variable to tell computer when the game is out of questions, or MaxQuestions or something

var lastQuestionIndex = quizQuestions.length - 1;

//index for keeping track of what question user is currently answering
var currentQuestionIndex = 0;

//need functions for presenting the questions to the user, TOGGLE display:none

function runQuestions() {
  //the question
  question.innerHTML =  "<p>" + quizQuestions[currentQuestionIndex]  + "</p>";
  //the answer choices
  choice1.innerHTML = quizQuestions[currentQuestionIndex].choice1;
  choice2.innerHTML = quizQuestions[currentQuestionIndex].choice2;
  choice3.innerHTML = quizQuestions[currentQuestionIndex].choice3;
  choice4.innerHTML = quizQuestions[currentQuestionIndex].choice4;
}


//need functions to tell computer to update score and time with each answer, and a caveat on the timer if the answer is wrong



//need function to tell computer to end game if timer runs out or if user has answered all questions





}






