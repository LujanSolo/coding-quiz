// possible variables to get by ID 
var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var results = document.getElementById("results")
var submitButton= document.getElementById("submitButton")

var choice1 = document.getElementById("1")
var choice2 = document.getElementById("2")
var choice3 = document.getElementById("3")
var choice4 = document.getElementById("4")

var scoreContainer = document.getElementById("results")

var userInitials = document.querySelector("#userInitials");


// START GAME FUNCTION
start.addEventListener("click", startGame);

function startGame(){
  welcome.style.display = "none";
  startTimer();
  quiz.style.display = "block";
}

//BUILD TIMER
var secondsRemaining = 60;
var countdownEl = document.getElementById("countdown");
var timer;
// TIMER FUNCTION
function startTimer() {
  countdownEl.textContent = secondsRemaining;
  var timer = setInterval(
    () => {
      secondsRemaining--;
      countdownEl.textContent = secondsRemaining;
      if (secondsRemaining <= 0) {
        clearInterval(timer);
        endGame();
      }
  }, 1000);
};

// need  variable to tell computer when the game is out of questions, or MaxQuestions or something
var lastQuestionIndex = quizQuestions.length - 1;
//index for keeping track of what question user is currently answering
var currentQuestionIndex = 0;


// function runQuestion() {
//   var q = question[currentQuestionIndex];
//   questions.innerHTML ="<p>" + q.question + "</p>";
  
//   choice1.innerHTML = q.choice1;
//   choice2.innerHTML = q.choice2;
//   choice3.innerHTML = q.choice3;
//   choice4.innerHTML = q.choice4;
// }
// welcome.style.display = "none";
// runQuestion();
// quiz.style.display = "block";

//SCOREBOARD
function showResults() {
  quiz.style.display = "none";
  results.style.display = "block";
}



// buildQuiz();
// // submit button to go to results screen
// submitButton.addEventListener('click', showResults);





// // AN ARRAY FOR THE QUESTIONS AND ANSWERS
// var questions = [  
//   {
//     question: "Commonly used data types do NOT include:",
//     answers: {
//       1: "strings",
//       2: "booleans",
//       3: "alerts",
//       4: "numbers",
//     },
//     correctAnswer: "3"
//   },
//   {
//     question: "The condition in an if / else statement is enclosed in __________.",
//     answers: {
//       1: "quotes",
//       2: "curly brackets",
//       3: "parentheses",
//       4: "square brackets",
//     },
//     correctAnswer: "2"
//   },
//   {
//     question: "Arrays in JavaScript can be used to store __________.",
//     answers: {
//       1: "numbers and strings",
//       2: "other arrays",
//       3: "booleans",
//       4: "all of the above",
//     },
//     correctAnswer: "4"
//   },
//   {
//     question: "Who invented JavaScript?",
//     answers: {
//       1: "Theodore Mojava",
//       2: "Brandon Eich",
//       3: "Thomas Anderson",
//       4: "artificial intelligence",
//     },
//     correctAnswer: "2"
//   },
//   {
//     question: "String values must be enclosed within ___________ when being assigned to variables.",
//     answers: {
//       1: "commas",
//       2: "curly brackets",
//       3: "quotes",
//       4: "parentheses",
//     },
//     correctAnswer: "3"
//   }
// ]

// function buildQuiz(){
//   //variable to hold questions and answers depending on quiz block
//   var htmlOutput = [];
// }






