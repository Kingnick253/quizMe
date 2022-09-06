// Declare count down
let startBtn = document.querySelector("#startBtn");


const hideEndScreen = document.querySelector(".endGame").style.display = "none";

//DECLARE  questions number (done)

let questions = [
    {
        //question
        question:"Which is a JavaScript Data Type?",
        //answers
        answers: ["String", "div", "body", "h1"],
        //correct answer 
        correctAns: "String"
    },
    {
        //question
        question:"Which is a looping structure?",
        //answers
        answers: ["For Loop", "IF/Else", "Array", "Function"],
        //correct answer 
        correctAns: "For Loop"
    },
    {
        //question
        question:"Array uses what to store more than one item?",
        //answers
        answers: ["Parentheses", "Curly Braces", "Square Brackets", "Carrot Brackets"],
        //correct answer 
        correctAns: "Square Brackets" 
    },
    {
        //question
        question:"Functions are used in what?",
        //answers
        answers: ["Html", "CSS", "Java", "JavaScript"],
        //correct answer 
        correctAns: "JavaScript" 
    },
    {
        //question
        question:"What is the peferred way to Declare a Variable?",
        //answers
        answers: ["const/let", "var", "Delcare", "Define"],
        //correct answer 
        correctAns: "const/let" 
    }
    
];
// setquestionpostion to 0
let questionPosition = 0;
let currentQuestion = questions[questionPosition];
// for(let i = 0; i < questions.length; i++);

// const questionPrompt = $(".question");
// questionPrompt.html("");
function questPosition(){
    let template = `
    <h2>${currentQuestion.question}</h2>
    <button data-answer="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</button>
    <button data-answer=" ${currentQuestion.answers[1]}">${currentQuestion.answers[1]}</button>
    <button data-answer=" ${currentQuestion.answers[2]}">${currentQuestion.answers[2]}</button>
    <button data-answer=" ${currentQuestion.answers[3]}">${currentQuestion.answers[3]}</button>
    
    `
    document.getElementById("gameContainer").innerHTML = template;

}

//  Declare a `timerInterval`
//DELCARE the 'timeel'
let timeLeft = 60;

function timer(){
   let timeInterval = setInterval(function(){
        timeLeft--;
        
        if(timeLeft >= 0){
            let timeEl = document.querySelector('#timer');
            timeEl.textContent = timeLeft;
            // stops execution of action at set interval  
        }else{
            clearInterval(timeInterval);
        }
        

    },1000);
    
}



// function to startgame
function startGame(){
    timer();
    const start = document.querySelector(".start");
//  google how to add a class in lieu of setting attribute.
    start.setAttribute("class", "hide");
    //needs to hide the start screen
    
    //start the question position to 0,display the current quesiton
    questPosition();
    
   
    //set the starting value of ` countdown`
    
    // Start the timer `Starttimer`
    // IF `countdown` === 0 THEN `endGame()`
    if(timeLeft === 58){
        endGame();
    }
}

// Function `endGame`

    function endGame(){
        //Hide the questions area
        const quest = document.querySelector("gameContainer");
        quest = setAttribute("class", "hide");
        hideEndScreen = setAttribute("class" ,"block");
        console.log("Game ended ");

        // show the recorded highscore

        //CLEAR the timer interval to stop from running



    }
//function to answerQuestion
    // function answerQuestion(){

    //Check if the answer is right
    
    // IF the answer is wrong
    
    // THEN we need to subtract from 'countdown'
    
    
    // iNCREASING THE QUESITON POSITION BY 1   
    // IF ive passed the last quesiton
        //THEN `endgame`
        
    // ELSE 
        // Display the next question
        // call questPosition();

    
    // questionPosition++
    // displayCurrentQuestion()
// }

// Function `displayCurrentQuestion`
    // function displayCurrentQuestion(){
        // questions[questionPosition]
        
    // }
// Function `recordTheHighscore`
    // function recordHighscore(){
// 

    // }
    
    startBtn.addEventListener("click", startGame);