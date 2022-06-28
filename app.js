const resultDisplay = document.querySelector("#result");
const choiceDisplay = document.querySelector("#choices");
const choices = ["rock", "paper", "scissor"];

const clickHandler = (e) => {
  const userChoice = e.target.innerHTML;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  getResult(userChoice, computerChoice);
  resultDisplay.innerHTML = `Your Choice: ${userChoice} and the Computer Choice: ${computerChoice}, ${result}`;
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", clickHandler);
  choiceDisplay.appendChild(button);
});

const getResult = (userChoice, computerChoice) => {
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
