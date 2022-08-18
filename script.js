console.log("hello world");

function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "knight";
  } else if (choice >= 0.66) {
    return "wizard";
  } else {
    return "archer";
  }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie.";
  } else if (playerSelection === "knight") {
    if (computerSelection === "wizard") {
      computerScore += 1;
      return "You lose. Wizard beats knight.";
    } else {
      playerScore += 1;
      return "You win. Knight beats archer.";
    }
  } else if (playerSelection === "archer") {
    if (computerSelection === "knight") {
      computerScore += 1;
      return "You lose. Knight beats Archer.";
    } else {
      playerScore += 1;
      return "You win. Archer beats wizard.";
    }
  } else if (playerSelection === "wizard") {
    if (computerSelection === "archer") {
      computerScore += 1;
      return "You lose. Archer beats wizard.";
    } else {
      playerScore += 1;
      return "You win. Knight beats archer.";
    }
  } else {
    return "You did not enter the correct input. Please enter \"wizard\", \"archer\" or \"knight\".";
  }
}

function game() {
  alert("It's time to play a game of Knight Archer Wizard. Knight beats archer, Archer beats Wizard, and Wizard beats Knight. Choose wisely. Play till someone gets 5 wins.");
  let round = 1;
  while (computerScore < 5 && playerScore < 5) {
    let playerSelection = 
      prompt(`What will you pick for round ${round}? The score is: You - ${playerScore} Computer - ${computerScore}.`);
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    round++;
  }
  if (playerScore === 5) {
    alert(`You win the game ${playerScore} to ${computerScore}.`);
  } else {
    alert(`You lose the game ${playerScore} to ${computerScore}.`);
  }
}