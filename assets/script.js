
// Timer, needs to statrt when you hit the button
// timer starts at 120s and end at 0
    // penalty of loss of 10 sec for incorrect answer






// Questions  MAKE YOUR OWN QUESTIONS!!!

const questions = [
    {
        question: "What classic series features a vessel known as 'Time and Relative Dimensions in Space'?",
        answers: [
              { text: 'Star Trek', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Buck Rogers", correct: false} ,
              { text: "Doctor Who", correct: true}, 
        ]
    },
    {
        question: "Which of the folllowing would make the dumbest header?",
        answers: [
              { text: "thsrth", correct: false},  
              { text: "op", correct: false},
              { text: "tanc", correct: false} ,
              { text: "blurchk", correct: true},     
        ]
    },
]


const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
        // sets first question and score to 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}
    // advances full questions thru quiz one by one and...

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

            // updates answers and dispalys correct with other answers
         currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");         
            button.innerHTML = answer.text;
                // appends HTML for new button
            button.classList.add("btn");
            answerButton.appendChild(button);    

         });  
   }
   function resetState(){
        nextButton.style.display ="none"
        while(answerButton.firstChild) 
        {answerButton.removeChild(answerButton.firstChild)
        };

   }

startQuiz();


