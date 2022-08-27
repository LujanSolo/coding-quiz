//calls for each CONSTANT ID from index.html
const startButton = document.querySelector("#startBtn");
const questionContainerEl = document.querySelector("#questionContainer");
const questionEl = document.querySelector("#questions");
const answerButtonsEl = document.querySelector("#answerButtons");
let questionIndex = 0;
var secondsRemaining = 60;
var penalty = 10;
const countdownEl = document.querySelector("#countdown");
var timer;
var timerCount;
var score = 0;
var isWin = false;
var isLoss = false;
var quiz = document.getElementById("quiz")
var results = document.getElementById("results")
var submitButton= document.getElementById("submitButton")

function buildQuiz(questions, questionContainer, resultsContainer, submitButton) {
  
  //show questions
  showQuestions(questions,questionContainer);

  //when user submits initials, go to results page
  submitButton.onclick = function(){
    showResults(questions, questionContainer, resultsContainer);
  }
};

startButton.addEventListener("click", init);

//START THE QUIZ
function init() {
  document.querySelector("#welcome").style.display = "none";
  document.querySelector("#questionContainer").style.display = "block";
  startTimer();
  showQuestions();
};


// TIMER FUNCTION
function startTimer() {
  countdownEl.textContent = secondsRemaining;
  var timer = setInterval(
    () => {
      secondsRemaining--;
      countdownEl.textContent = secondsRemaining;
      if (secondsRemaining >= 0) {
        if(isWin && secondsRemaining > 0) {
        clearInterval(timer);
        winGame();
      }
  }
  if (secondsRemaining === 0) {
    clearInterval(timer);
    isLoss = true;
  }
}, 1000);
};

//MY QUESTIONS AND ANSWERS
var questionsIndex = [  
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
];

//a function to show each  QUESTION and each ANSWER CHOICE
function showQuestions(questions, questionContainer){
  
  var output = [];
  var answers;
  questionEl.innerText = questionsIndex[questionIndex].question;
  answerButtonsEl.innerHTML = "";
  for(var i=0; i < questionsIndex[questionIndex].answers.length; i++) {
    var btn = document.createElement("button");
    btn.innerText = questionsIndex[questionIndex].answers[i].text;
    btn.dataset.correct=questionsIndex[questionIndex].answers[i].correct;
    btn.onclick = verifyAnswer;
    answerButtonsEl.appendChild(btn)
  }
};

function verifyAnswer(event) {
  console.log(event.target);
    
    if (event.currentTarget.dataset.correct === "true") {
    score++;
    var correctDiv = document.querySelector("#test");
    correctDiv.innerText = "Correct!";
  } else { 
      secondsRemaining = secondsRemaining - penalty;
      var incorrectDiv = document.querySelector("#test");
      incorrectDiv.innerText = "Incorrect! -10 seconds!"; 
  }
  questionIndex ++;
  showQuestions();
};


