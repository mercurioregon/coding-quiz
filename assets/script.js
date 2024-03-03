
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
        question: "The beaches of what U.S. state where the inspiration for 'Dune'?",
        answers: [
              { text: "Hawaii", correct: false},  
              { text: "Oregon", correct: true},
              { text: "California", correct: false} ,
              { text: "North Carolina", correct: false},     
        ]
    },
    {
        question: "Who invented the flux capacitor?",
        answers: [
              { text: 'Anakin Skywalker', correct: false},  
              { text: "James T. Kirk", correct: false},
              { text: "Tony Stark", correct: false} ,
              { text: "Emmitt Brown", correct: true}, 
        ]
    },
    {
        question: "Which one of these is a Corellian freighter?",
        answers: [
              { text: 'Serenity', correct: false},  
              { text: "Battlestar Galactica", correct: false},
              { text: "Millennium Falcon", correct: true} ,
              { text: "Slave-1", correct: false}, 
        ]
    },
    {
        question: "What series features a protagonist named Jim Holden?",
        answers: [
              { text: 'The Expanse', correct: true},  
              { text: "Star Trek: TNG", correct: false},
              { text: "Doctor Who", correct: false} ,
              { text: "Foundation", correct: false}, 
        ]
    },
    {
        question: "Ellen Ripley is the central character of what film series?",
        answers: [
              { text: 'Leviathan', correct: false},  
              { text: "The Black Hole", correct: false},
              { text: "Ender's Game", correct: false} ,
              { text: "Alien", correct: true}, 
        ]
    },
    {
        question: "",
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

var sfxCorrect = new Audio(`assets/mixkit-sci-fi-plasma-gun-power-up-1679.wav`);
var sfxIncorrect = new Audio(`assets/mixkit-wrong-answer-bass-buzzer-948.wav`);




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





                // removes previous answers

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
        sfxCorrect.play();
        score++;
           }
   else{
    selectedBtn.classList.add("incorrect");
        sfxIncorrect.play()
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


