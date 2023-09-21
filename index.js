// Here we start we the option that we have
const options = ["rock", "paper", "scissors"];

// Here we have the computer choice one of the options of rock, paper and scissors
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

/* 
In this function we check who is the winner by checking if its a tie
if it's not a tie then we are checking if player or computer won
*/
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

//Here we have the round. We check to so see who wins the round or if its a tie
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

/*
Here we are making the prompt so we can get an real person choosing between rock papper and scissors
If the prompt doesnt choice the options that we have it will repeat until they give the one of the three options
I also change the prompt into lowercase because that is what i have. 
*/

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

/*
Here we have the game mode. We welcome them and ask them to prompt one of the tre choices.
and then we show if the player won the round or lost the round or if its a tie. 
after 5 rounds the game ends and either the player won or the computer won or it turned into a tie. 
*/
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("You won! Congratulations");
  } else if (scoreComputer > scorePlayer) {
    console.log("The computer won you lost!");
  } else {
    console.log("We have a Tie! ");
  }
}

//Calling the function game so we can start the game.
game();
