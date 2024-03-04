
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
        question: "What Star Wars character owned a purple lightsaber?",
        answers: [
              { text: 'Qui-Gon Jinn', correct: false},  
              { text: "Obi-Wan Kenobi", correct: false},
              { text: "Mace Windu", correct: true} ,
              { text: "Yoda", correct: false}, 
        ]
    },
    {
        question: "What was Neo's real name in 'The Matrix'?",
        answers: [
              { text: 'John Wick', correct: false},  
              { text: "John Anderson", correct: false},
              { text: "Johnny Smith", correct: false} ,
              { text: "Thomas Anderson", correct: true}, 
        ]
    },
    {
        question: "What color is Spock's blood?",
        answers: [
              { text: 'Red', correct: false},  
              { text: "Green", correct: true},
              { text: "Black", correct: false} ,
              { text: "Burnt umber", correct: false}, 
        ]
    },
    {
        question: "What film was secretly knows as 'Blue Harvest' during production?",
        answers: [
              { text: 'Star Trek II', correct: false},  
              { text: "Avatar", correct: false},
              { text: "The Fifth Element", correct: false} ,
              { text: "Star Wars", correct: true}, 
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

      // Sets first question and score to 0.

let currentQuestionIndex = 0;
let score = 0
      

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question, nerd!";
    timerId = setInterval(clockTick, 1000);
        showQuestion();
       timerElement.currentQuestion = time;

}
    // Advances full questions thru quiz one by one.
    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    // Updates answers and dispalys correct with other answers
        currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");         
        button.innerHTML = answer.text;

    // Appends HTML for new button.

        button.classList.add("btn");
        answerButton.appendChild(button); 
        if(answer.correct){
        button.dataset.correct = answer.correct;
                  
        }
                        
           button.addEventListener("click", selectAnswer);   

         });  
   }

        // / Removes previous answers.

   function resetState(){
        nextButton.style.display ="none"
        while(answerButton.firstChild) 
        {answerButton.removeChild(answerButton.firstChild)
        };

   }
         // Determines correct or incorrect button clicks, adds to score.
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
  
         // Buttons disable if wrong choce is made
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

        // Ends game and shows score, button changes to Try Again
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


