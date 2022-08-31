// Declare count down
let timeInterval;

const timeEl = document.querySelector('#timer');


//DECLARE  questions number

let questions = [
    {
        //question
        question:"How do I get this answer",
        //answers
        answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
        //correct answer 
    }
    // {
    //     //question
    //     //answers
    //     //correct answer 
    // },
    // {
    //     //question
    //     //answers
    //     //correct answer 
    // },
    // {
    //     //question
    //     //answers
    //     //correct answer 
    // },
    
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