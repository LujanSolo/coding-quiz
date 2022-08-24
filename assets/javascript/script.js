//calls for each CONSTANT ID from index.html
const startButton = document.querySelector("#startBtn");
const questionContainerEl = document.querySelector("#questionContainer");
const questionEl = document.querySelector("#questions");
const answerButtonsEl = document.querySelector("#answerButtons");
let questionIndex = 0;


// var quiz = document.getElementById("quiz")
// var results = document.getElementById("results")
// var submitButton= document.getElementById("submitButton")


function showQuestions(questions, questionContainer) {
      //code TO BE (or not to be)
}

function showResults(question, questionContainer, resultsContainer) {
        //code TO BE (or not to be)
}


function buildQuiz(questions, questionContainer, resultsContainer, submitButton) {
  
  //show questions
  showQuestions(questions,questionContainer);

  //when user submits initials, go to results page
  submitButton.onclick = function(){
    showResults(questions, questionContainer, resultsContainer);
  }
}
startButton.addEventListener("click", init);


//START THE QUIZ
function init() {
  document.querySelector("#welcome").style.display = "none";
  document.querySelector("#questionContainer").style.display = "block";
  startTimer();
  showQuestions();
}

//TIMER
let secondsRemaining = 60;
const countdownEl = document.querySelector("#countdown");
let timer;
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
console.log("hello")

const questionsIndex = [  
  {
    question: "Commonly used data types do NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ] 
  },
  {
    question: "The condition in an if / else statement is enclosed in __________.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: true },
      { text: "parentheses", correct: false },
      { text: "square brackets", correct: false },
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store __________.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true }
    ]
  },
  {
    question: "Who invented JavaScript?",
    answers: [
      { text: "Theodore Mojava", correct: false },
      { text: "Brandon Eich", correct: true },
      { text: "Mr. Anderson", correct: false },
      { text: "artificial intelligence", correct: false },
    ]
  },  
  {
    question: "String values must be enclosed within ___________ when being assigned to variables.",
    answers: [
      {text: "commas", correct: false },
      {text: "curly brackets", correct: false },
      {text: "quotes", correct: true },
      {text: "parentheses", correct: false },
    ]
  },
]

//a function to show each  QUESTION and each ANSWER CHOICE
function showQuestions(questions, questionContainer){
  //array for output, first ? to be replaced with next
  var output = [];
  var answers;
  questionEl.innerText = questionsIndex[questionIndex].question;
  for(var i=0; i < questionsIndex[questionIndex].answers.length; i++) {
    var btn = document.createElement("button");
    btn.innerText = questionsIndex[questionIndex].answers[i].text;
    btn.dataset.correct=questionsIndex[questionIndex].answers[i].correct;
    btn.onclick = test;
    answerButtonsEl.appendChild(btn)
  }
}

function test(event) {
  console.log(event.target);
  // comparing if it is correct or incorrect
  // increasing quesiotnindex
  // call showQuestions
}




// var scoreContainer = document.getElementById("results")

// var userInitials = document.querySelector("#userInitials");

 



// function renderQuestion() {
//   var currentQuestion = questionsIndex[qIndex];
//   questionsEl.innerText = currentQuestion.question;
//   currentQuestion.answers.forEach(function(showAnswer, i){
//     buttonEl.textContent = showAnswer;
//     console.log(showAnswer);
// })
// }
// function buttonTest() {

// }



// need  variable to tell computer when the game is out of questions, or MaxQuestions or something






// function runQuestion() {
//   var q = question[currentQuestion];
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
// function showResults() {
//   quiz.style.display = "none";
//   results.style.display = "block";
// }



// buildQuiz();
// // submit button to go to results screen
// submitButton.addEventListener('click', showResults);














