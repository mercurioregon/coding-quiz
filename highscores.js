

const saveScoreBtn = document.getElementById('saveScoreBtn');
initials.addEventListener("keyup", () =>{
    saveScoreBtn.disabled =!initials.value;
}

);

const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
// finalScore.innerText = mostRecentScore;





localStorage.setItem("highScores", JSON.stringify([]));






// PREVENTS GOING TO ANOTHER PAGE AFTER SUBMISSION, THE DEFAULT SETTING

saveHighScore = e =>{
    e.preventDefault();
};




