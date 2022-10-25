let btnAnswer = document.querySelectorAll("button");
let questionPosition = 0;
let timeEl = document.querySelector('#timer');
let scoreKeeper = document.querySelector('#score');





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



// const questionPrompt = $(".question");
// questionPrompt.html("");
let currentQuestion = questions[questionPosition];

function displayQuestion(){
    // for(i=0; i <questions.length; i++){
    let template = `
    <h2>${currentQuestion.question}</h2>
    <button id = btn data-answer="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</button>
    <button id = btn data-answer=" ${currentQuestion.answers[1]}">${currentQuestion.answers[1]}</button>
    <button id = btn data-answer=" ${currentQuestion.answers[2]}">${currentQuestion.answers[2]}</button>
    <button id = btn data-answer=" ${currentQuestion.answers[3]}">${currentQuestion.answers[3]}</button>
    
    `
    document.getElementById("gameContainer").innerHTML = template;
    
    
    console.log(btn1.value)
    console.log(btn2.value)
    console.log(btn3.value)
    console.log(btn4.value)
    // }
}

//  Declare a `timerInterval`
//DELCARE the 'timeel'



let timeLeft = 60;

function timer(){
    
    let timeInterval = setInterval(function(){
    console.log(timeLeft);
    timeLeft--;
    timeEl.textContent = timeLeft;
        if(timeLeft >= 0){
        
        }else{
           
            clearInterval(timeInterval);

            // endGame();
            // stops execution of action at set interval  
        
        }
        

    },1000);
}



// function to startgame
function startGame(){
    // starts timer
    timer();
    const homepage = document.querySelector(".homepage");
//  google how to add a class in lieu of setting attribute.
    homepage.setAttribute("class", "hide");
    //needs to hide the start screen
    
    //start the question position to 0
    questionPosition = 0;
    // display the current quesiton
    displayQuestion();
    // displayQuestion();
    //set the starting value of `countdown`
    // let countdown = 60;
    // Start the timer `Starttimer`
  
    // IF `countdown` === 0 THEN `endGame()`
    
}

// Function `endGame`
    function endGame(){
        // Hide the questions area
    

        // show the recorded highscore

        // CLEAR the timer interval to stop from running



    }
//function to answerQuestion
    function answerQuestion(event){
        let scoreCount = 0;
    //Check if the answer is right
        if(event.target.matches("#btn")){
            if(event.target.textContent ===currentQuestion.correctAns){
                scoreCount += 5;
            }else if(scoreCount < 0){
                scoreCount =0;
            }

        }
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
}

// Function `displayCurrentQuestion`
    // function displayCurrentQuestion(){
        // questions[questionPosition]
        
    // }
// Function `recordTheHighscore`
    // function recordHighscore(){
// 

    // }
    // let answerbtn = document.querySelector()
    let startBtn = document.querySelector("#startBtn");

    startBtn.addEventListener("click", startGame);
    btn1.addEventListener("click", answerQuestion);
    btn2.addEventListener("click", answerQuestion);
    btn3.addEventListener("click", answerQuestion);
    btn4.addEventListener("click", answerQuestion);