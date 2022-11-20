let btnAnswer = document.querySelectorAll("button");
let questionPosition = 0;
let timeEl = document.querySelector("#timer");
let scoreEl = document.querySelector("#score");
let endGameEl = document.querySelector("#endGame");
let resultsEl = document.querySelector("#results");
let gameEl = document.querySelector("#gameContainer");
let viewHighscore = document.querySelector("#viewhighScores");
let homepage = document.querySelector(".homepage");
let time = document.querySelector(".time");
let highscoreEl = document.querySelector("#highScore");
let scoreArr = [];
let timeInterval = "";
let score = 0;
let scoreInitials = [];

//DECLARE  questions number (done)

let questions = [
  {
    //question
    question: "Which is a JavaScript Data Type?",
    //answers
    answers: ["Undefined", "div", "body", "h1"],
    //correct answer
    correctAns: "Undefined",
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
    question: "Arrays uses what to store more than one item?",
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
    question: "Express is part of which language?",
    //answers
    answers: ["Html", "CSS", "Python", "JavaScript"],
    //correct answer
    correctAns: "JavaScript",
  },
  {
    //question
    question: "What is the peferred way to declare a Variable?",
    //answers
    answers: ["const/let", "var", "Delcare", "Define"],
    //correct answer
    correctAns: "const/let",
  },
];



 


function displayQuestion() {
  gameEl.innerHTML = (`
 
    <h2>${questions[questionPosition].question}</h2>
    <button id = answer data-answer=" ${questions[questionPosition].answers[0]}">${questions[questionPosition].answers[0]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[1]}">${questions[questionPosition].answers[1]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[2]}">${questions[questionPosition].answers[2]}</button>
    <button id = answer data-answer=" ${questions[questionPosition].answers[3]}">${questions[questionPosition].answers[3]}</button>
    
    `);
}

let timeLeft = 60;

function timer() {
  timeInterval = setInterval(function () {
   
      if (timeLeft > 0) {
        timeEl.textContent = timeLeft;
    timeLeft--;
    
    } else {
      clearInterval(timeInterval);

      endGame();
      // stops execution of action at set interval
    }
  }, 1000);
}

// function to startgame
function startGame() {
    viewHighscore.style.display = "none";
    homepage.setAttribute("class", "hide");
     questionPosition = 0;
    timer();
    displayQuestion();
  
}

// Function `endGame`
function endGame() {
    timeEl.textContent = "";
    clearInterval(timeInterval);
    resultsEl.textContent ="";
    gameEl.style.display = "none";
    endGameEl.style.display ="block";
    time.setAttribute("class", "hide");
    scoreEl.textContent = score;
    
    highscoreEl.addEventListener("click", function(event){
        event.preventDefault();
        logScore(score);
    });
    
}
function scoreInterval() {
    resultsEl.textContent = "";
    resultsEl.style.display = "none";
}
//function to answerQuestion
function answerQuestion(event) {
  if (event.target.matches("#answer")) {
    if (event.target.textContent === questions[questionPosition].correctAns) {
        resultsEl.style.display = "block";
        resultsEl.textContent = "Q # " + (questionPosition + 1) + " Nice Job!";
        score += 5;
        // setTimeout(scoreEl, 1000);
        
    } else {
        timeLeft = (timeLeft - 10);
        resultsEl.style.display = "block";
        resultsEl.textContent = "Q # " + (questionPosition + 1) + " Wrong!";
    }
      if(questionPosition < ( questions.length - 1)) {
        questionPosition++;
        
        displayQuestion();
        console.log(score);
      }else{
        endGame();
      }
    }
    // } 
  }

  function logScore(score){
    let initialsEl = document.querySelector("#initials").value;
    if(initialsEl === ""){
        alert("You need to add your Initials");
        return;
    }
    //save score and initials to local storage
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("initials", JSON.stringify(initialsEl));
    scoreArr.push(score);
    scoreInitials.push(initialsEl);
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
    localStorage.setItem("scoreInitials", JSON.stringify(scoreInitials));
    
    scoreArr = JSON.parse(localStorage.getItem('scoreArr'));
    console.log(scoreArr);

    // let scoresLocal = JSON.parse(localStorage.getItem("scoreArr"));
    // console.log(scoresLocal);
    showHighscore();
  }
  
  function showHighscore(){
    endGameEl.setAttribute("id", "highscorePage");
    endGameEl.innerHTML=(`
        <div>
        
        <h1>Highscore</h1>
    </div>
    <table id="table">
        <tr>
            <th> Top player </th>
            <th> HighScores </th>

        </tr>
    </table>

    
    
    `);
    resultsEl.textContent ="";
   viewHighscore.style.display = "none";
   gameEl.style.display = "none";
   endGameEl.style.display ="block";
   homepage.setAttribute("class", "hide");
   time.setAttribute("class", "hide");
    

   for(i = 0; i <scoreArr.length; i++){
    let creatNewRow = document.createElement("tr");
    creatNewRow.innerHTML = `
        <td>${scoreInitials[i]}</td>
        <td>${scoreArr[i]}</td>
    
    `;
    table.appendChild(creatNewRow);
   }
   let playAgain = document.getElementById("playAgainBtn");
   playAgain.addEventListener("click", startGame);
   startBtn.addEventListener("click", startGame);

  }

let startBtn = document.querySelector("#startBtn");
console.log(viewHighscore);
startBtn.addEventListener("click", startGame);
gameEl.addEventListener("click", answerQuestion);
// viewHighscore.addEventListener("click", showHighscore);
