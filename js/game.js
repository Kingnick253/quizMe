// Declare count down
let timeInterval;

const timeEl = document.querySelector('#timer');


//DECLARE  questions number

let questions = [
    {
        //question
        questionOne:"Which is a JavaScript Data Type?",
        //answers
        answers: ["String", "div", "body", "h1"],
        //correct answer 
        correctAns: "String"
    },
    {
        //question
        questionTwo:"Which is a looping structure?",
        //answers
        answers: ["For loop", "IF/Else", "Array", "Function"],
        //correct answer 
        correctAns: "For loop"
    },
    {
        //question
        questionThree:"Array uses what to store more than one item?",
        //answers
        answers: ["Parentheses", "Curly Braces", "Square Brackets", "Carrot Brackets"],
        //correct answer 
        correctAns: "Square Brackets" 
    },
    {
        //question
        questionFour:"Functions are used in what?",
        //answers
        answers: ["Html", "CSS", "Java", "JavaScript"],
        //correct answer 
        correctAns: "JavaScript" 
    },
    {
        //question
        questionFive:"What is the peferred way to Declare a Variable?",
        //answers
        answers: ["const/let", "var", "Delcare", "Define"],
        //correct answer 
        correctAns: "const/let" 
    }
    
];
let questionPosition = 0;
//  Declare a `timerInterval
let currentQuestion = questions[questionPosition];
// for(let i = 0; i < questions.length; i++);

// const questionPrompt = $(".question");
// questionPrompt.html("");
let questionOne = `
<h2>${currentQuestion.question}</h2>
<button data-answer="${currentQuestion.answers[0]}">A</button>
<button data-answer=" ${currentQuestion.answers[1]}">B</button>
<button data-answer=" ${currentQuestion.answers[2]}">C</button>
<button data-answer=" ${currentQuestion.answers[3]}">D</button>

`
document.getElementById("testOne").innerHTML = questionOne;

//DELCARE the 'timeel'


// function to startgame
// function startGame(){
    
    
    //needs to hide the start screen
    
    //st the quesiton position to 0
    
    // display the current quesiton
    
    //set the starting value of ` countdown`
    
    // Start the timer `Starttimer`
    // IF `countdown` === 0 THEN `endGame()`
    
// }

// Function `endGame`
    // function endGame(){
        //Hide the questions area

        // show the recorded highscore

        //CLEAR the timer interval to stop from running



    // }
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