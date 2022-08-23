// possible variables to get by ID 
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var submitButton= document.getElementById("submitButton");

var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");

var timer = document.getElementById("timer");

//possible querySelectors:
var userInitials = document.querySelector("#userInitials");

// an array for the questions
var questions = [
  "Commonly used data types do NOT include:",
  "The condition in an if / else statement is enclosed in __________.",
  "Arrays in JavaScript can be used to store __________.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
  "String values must be enclosed within ___________ when being assigned to variables."
];

//POSSIBLE FUNCTIONS

function startGame(){}

function showResults(){}

// submit button to go to results screen
submitButton.addEventListener('click', showResults);








