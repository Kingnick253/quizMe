let btnAnswer = document.querySelectorAll("button");
let questionPosition = 0;
let timeEl = document.querySelector("#timer");
let scoreEl = document.querySelector("#score");
let finalScoreEl = document.querySelector("#finalscore");
let resultsEl = document.querySelector("#results");
let gameEl = document.querySelector("#gameContainer");
let scoreArr = [];


//DECLARE  questions number (done)

let questions = [
  {
    //question
    question: "Which is a JavaScript Data Type?",
    //answers
    answers: ["String", "div", "body", "h1"],
    //correct answer
    correctAns: "String",
  },
  {
    //question
    question: "Which is a looping structure?",
    //answers
    answers: ["For Loop", "IF/Else", "Array", "Function"],
    //correct answer
    correctAns: "For Loop",
  },
  {
    //question
    question: "Array uses what to store more than one item?",
    //answers
    answers: [
      "Parentheses",
      "Curly Braces",
      "Square Brackets",
      "Carrot Brackets",
    ],
    //correct answer
    correctAns: "Square Brackets",
  },
  {
    //question
    question: "Functions are used in what?",
    //answers
    answers: ["Html", "CSS", "Java", "JavaScript"],
    //correct answer
    correctAns: "JavaScript",
  },
  {
    //question
    question: "What is the peferred way to Declare a Variable?",
    //answers
    answers: ["const/let", "var", "Delcare", "Define"],
    //correct answer
    correctAns: "const/let",
  },
];
// setquestionpostion to 0


 


function displayQuestion() {
  // for(i=0; i <questions.length; i++){
  gameEl.innerHTML = (`

    <h2>${questions[questionPosition].question}</h2>
    <button id = answer data-answer=" ${questions[questionPosition].answers[0]}">${questions[questionPosition].answers[0]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[1]}">${questions[questionPosition].answers[1]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[2]}">${questions[questionPosition].answers[2]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[3]}">${questions[questionPosition].answers[3]}</button>
    
    `);
 

  // }
}

//  Declare a `timerInterval`
//DELCARE the 'timeel'

let timeLeft = 60;

function timer() {
  let timeInterval = setInterval(function () {
   
      if (timeLeft > 0) {
    timeLeft--;
    timeEl.textContent = timeLeft;
    } else {
      clearInterval(timeInterval);

      // endGame();
      // stops execution of action at set interval
    }
  }, 1000);
}

// function to startgame
function startGame() {
  // starts timer
 
  const homepage = document.querySelector(".homepage");
  homepage.setAttribute("class", "hide");
  //needs to hide the start screen

  //start the question position to 0
  questionPosition = 0;
  timer();
  displayQuestion();
  
}

// Function `endGame`
function endGame() {
 
}
function scoreInterval() {
    scoreEl.textContent = "";
    scoreEl.style.display = "none";
}
//function to answerQuestion
function answerQuestion(event) {
  if (event.target.matches("#answer")) {
    if (event.target.textContent === questions[questionPosition].correctAns) {
        scoreEl.style.display = "block";
        scoreEl.textContent = "Q # " + (questionPosition + 1) + "Nice Job!";
        setTimeout(scoreEl, 1000);
    } else {
        timeLeft = (timeLeft - 10);
        scoreEl.style.display = "block";
        scoreEl.textContent = "Q # " + (questionPosition + 1) + "Not even close";
    }
      if(questionPosition < ( questions.length - 1)) {
        questionPosition++;
        displayQuestion();
      }else{
        endGame();
      }
    }
    // } 
  }

let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", startGame);
gameEl.addEventListener("click", answerQuestion);
