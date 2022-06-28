const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoise();
    getResult();
    resultDisplay.innerHTML = result;
  })
);

const generateComputerChoise = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissor";
      break;
    case 3:
      computerChoice = "paper";
      break;
    default:
      throw new Error("Random Number generating is wrong");
  }
  computerChoiceDisplay.innerHTML = computerChoice;
};

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
};
