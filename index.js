const choiceButtons = document.querySelectorAll(".button");
const resultLabel = document.querySelector("#result");
const playerLabel = document.querySelector("#playerLabel");
const computerLabel = document.querySelector("#computerLabel");
const reset = document.querySelector("#reset");
const score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

score.addEventListener("click", () => {
  confirm("Your score: " + playerScore + "\n" + "Opponent score: " + computerScore);
})

reset.addEventListener("click", () => {
  
  playerLabel.textContent = "Please choose a button to start";
  computerLabel.textContent = "Your opponent is waiting for his turn...";
  resultLabel.textContent = "";
  playerScore = 0;
  computerScore = 0;
})

choiceButtons.forEach(button => button.addEventListener("click" , () => {
  
  const player = button.textContent;
  const computer = computerChoice();
  playerLabel.textContent = "You chose " + player;
  computerLabel.textContent = "Your opponent chose " + computer;
  resultLabel.textContent = checkWinner(player, computer); 
  
  if(checkWinner(player, computer) == "You won :)") playerScore++;
  if(checkWinner(player, computer) == "You lost :(") computerScore++;
}))

function computerChoice(){
  const random = Math.round(Math.random() * 2);
  
  if(random == 0) return "Rock";
  if(random == 1) return "Paper";
  else return "Scissors";
}

function checkWinner(player, computer){
  
  if(player == computer){
    return "Draw :/";
  }
  else if(player == "Rock"){
    return computer == "Scissors" ? "You won :)" : "You lost :("; 
  }
  else if(player == "Paper"){
    return computer == "Rock" ? "You won :)" : "You lost :("; 
  }
  else if(player == "Scissors"){
    return computer == "Paper" ? "You won :)" : "You lost :("; 
  }
}


