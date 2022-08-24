//calls for each CONSTANT ID from index.html
const startButton = document.querySelector("#startBtn");
const questionContainerEl = document.querySelector("#questionContainer");
const questionEl = document.querySelector("#questions");
const answerButtonsEl = document.querySelector("#answerButtons");
let questionIndex = 0;


var quiz = document.getElementById("quiz")
var results = document.getElementById("results")
var submitButton= document.getElementById("submitButton")



var scoreContainer = document.getElementById("results")

var userInitials = document.querySelector("#userInitials");

var qIndex = 0;

// AN ARRAY FOR THE QUESTIONS AND ANSWERS

// START GAME FUNCTION
start.addEventListener("click", startGame);

function startGame(){
  welcome.style.display = "none";
  startTimer();
  quiz.style.display = "block";
  runningQuesiton = 0;
  renderQuestion();
}


console.log('howdy')

// var runningIndex = questionsIndex.length -1;


function renderQuestion() {
  var currentQuestion = questionsIndex[qIndex];
  questionsEl.innerText = currentQuestion.question;
  currentQuestion.answers.forEach(function(showAnswer, i){
    buttonEl.textContent = showAnswer;
    console.log(showAnswer);
})
}
function buttonTest() {

}



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














