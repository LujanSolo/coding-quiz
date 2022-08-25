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
    loseGame();
  }
}, 1000);
};

//MY QUESTIONS AND ANSWERS
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
];

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
    btn.onclick = verifyAnswer;
    answerButtonsEl.appendChild(btn)
  }
};

function verifyAnswer(event) {
  console.log(event.target);
  if (event === true) {
    score++;
    createDiv.textContent = "Correct!";
  } else { 
    secondsRemaining = secondsRemaining - penalty;
    createDiv.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;


    questionsIndex++;
// if true, add pseudoElement? to show "Correct!" at bottom of block

  }
    
  }
// }

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

  
  // comparing if it is correct or incorrect
  // increasing quesiotnindex
  // call showQuestions


// function showResults(questions, questionContainer, resultsContainer){
	
// 	// gather answer containers from our quiz
// 	var answerContainers = questionContainer.querySelectorAll('.answers');
	
// 	// keep track of user's answers
// 	var userAnswer = '';
// 	var numCorrect = 0;
	
// 	// for each question...
// 	for(var i=0; i<questions.length; i++){

// 		// find selected answer
// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		// if answer is correct
// 		if(userAnswer===questions[i].correctAnswer){
// 			// add to the number of correct answers
// 			numCorrect++;
			
// 			// color the answers green
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

	// show number of correct answers out of total
// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// }





// var scoreContainer = document.getElementById("results")

// var userInitials = document.querySelector("#userInitials");


// need  variable to tell computer when the game is out of questions, or MaxQuestions or something







//SCOREBOARD
// function showResults() {
//   quiz.style.display = "none";
//   results.style.display = "block";
// }



// buildQuiz();
// // submit button to go to results screen
// submitButton.addEventListener('click', showResults);






// // function startTimer() {
// //   // Sets timer
// //   timer = setInterval(function() {
// //     timerCount--;
//     countdownEl.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 60000);
// }










