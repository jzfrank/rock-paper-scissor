const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissor"];
let userChoice;
let computerChoice;
let result;

const clickHandler = (event) => {
  userChoice = event.target.id;
  userChoiceDisplay.innerHTML = "User Choice: " + userChoice;
  generateComputerChoice();
  getResult();
  console.log(result);
  resultDisplay.innerHTML = result;
};

const generateComputerChoice = () => {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = "Computer Choice: " + computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", clickHandler);
  gameGrid.appendChild(button);
}

const getResult = () => {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win!";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "You Lose!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "You Win!";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "You Lose!";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "You Win!";
  }

  console.log(result);
};
