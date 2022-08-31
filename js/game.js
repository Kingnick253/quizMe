// Declare count down
let timeInterval;
const timeEl = document.querySelector('#timer');

//DECLARE  questions number
let questionPosition = 0;
const questions = [
    {
        //question
        question:[],
        //answers
        answers: ["Answer A", "Answer B", "Answer C"],
        //correct answer 
    },
    {
        //question
        //answers
        //correct answer 
    },
    {
        //question
        //answers
        //correct answer 
    },
    {
        //question
        //answers
        //correct answer 
    },
    
];
//  Declare a `timerInterval
const currentQuestion = questions[questionPosition];
for(let i = 0; i < questions.length; i++);

//DELCARE the 'timeel'


// function to startgame
function startGame(){
    
    
    //needs to hide the start screen
    
    //st the quesiton position to 0
    
    // display the current quesiton
    
    //set the starting value of ` countdown`
    
    // Start the timer `Starttimer`
    // IF `countdown` === 0 THEN `endGame()`
    
}

// Function `endGame`
    function endGame(){
        //Hide the questions area

        // show the recorded highscore

        //CLEAR the timer interval to stop from running



    }
//function to answerQuestion
    function answerQuestion(){

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
}

// Function `displayCurrentQuestion`
    function displayCurrentQuestion(){
        questions[questionPosition]
        
    }
// Function `recordTheHighscore`
    function recordHighscore(){

        
    }