
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
        question: "What classic series features a vessel known as 'Time and Relative Dimensions in Space'?",
        answers: [
              { text: 'Star Trek', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Buck Rogers", correct: false} ,
              { text: "Doctor Who", correct: true}, 
        ]
    },
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
        question: "What classic series features a vessel known as 'Time and Relative Dimensions in Space'?",
        answers: [
              { text: 'Star Trek', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Buck Rogers", correct: false} ,
              { text: "Doctor Who", correct: true}, 
        ]
    },
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
        question: "What classic series features a vessel known as 'Time and Relative Dimensions in Space'?",
        answers: [
              { text: 'Star Trek', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Buck Rogers", correct: false} ,
              { text: "Doctor Who", correct: true}, 
        ]
    },
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
        question: "What classic series features a vessel known as 'Time and Relative Dimensions in Space'?",
        answers: [
              { text: 'Star Trek', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Buck Rogers", correct: false} ,
              { text: "Doctor Who", correct: true}, 
        ]
    },
















]


const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
var timerElement = document.getElementById('timer')
var time = questions.length * 20;
var timerId;

var sfxCorrect = new Audio(`assets/correct.wav`);
var sfxIncorrect = new Audio(`assets/mixkit-wrong-answer-bass-buzzer-948.wav`)




let currentQuestionIndex = 0;
let score = 0;
        // sets first question and score to 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question, nerd!";
    timerId = setInterval(clockTick, 1000);
        showQuestion();
       timerElement.currentQuestion = time;



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
            if(answer.correct){
                    button.dataset.correct = answer.correct;
                  
                          }
                         

            button.addEventListener("click", selectAnswer);   

         });  
   }





                // removes previos answers

   function resetState(){
        nextButton.style.display ="none"
        while(answerButton.firstChild) 
        {answerButton.removeChild(answerButton.firstChild)
        };

   }

            // determines correct or incorrect button clicks, adds to score
   function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){selectedBtn.classList.add("correct");
        score++;
           }
   else{
    selectedBtn.classList.add("incorrect");
     }

   

                // buttons disable if wrong choce is made
   Array.from(answerButton.children).forEach(button =>  {
    if (button.dataset.correct === "true") {
        button.classList.add ("correct");


            }
            button.disabled = true;
   });
        nextButton.style.display = "block";

   }

   function clockTick() {
    time--;
    timerElement.questionElement = time;
    if (time <= 0) {
        showScore();
    }

   }

            // ends game and shows score, button changes to Try Again
   function showScore() {
        resetState();
            questionElement.innerHTML = `Score - ${score}`;
            nextButton.innerHTML = "Try Again?";
            nextButton.style.display ="block";
   
   }

   function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
             }else{
                showScore();
             }

   }


   nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex , questions.length){
        handleNextButton();
            }else{
                startQuiz();
            }


   }
   
   
   )


startQuiz();


