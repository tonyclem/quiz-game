const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

// get hightScores from localStorage or set it to and empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// input for userName
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  // sort the score from low to heigh
  highScores.sort((a, b) => b.score - a.score);
  // cut of any index from 5
  highScores.splice(5);

  localStorage.setItem("hightScores", JSON.stringify(highScores));
  window.location.assign("/");
};
