function getComputerChoice() {
    let choice;
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "Rock";
    } else if (randomNumber === 1) {
        choice = "Scissors";
    } else {
        choice = "Paper";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let tie = `Tie! ${playerSelection} and ${computerSelection} are the same`;
    let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWin = `You win! ${playerSelection} beats ${computerSelection}`
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return tie;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return playerWin;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return playerWin;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        return playerWin;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return computerWin;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return computerWin; 
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return computerWin;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let userInput = prompt("Rock, paper, or scissors?: ")
        result = playRound(userInput, computerChoice);
        console.log(result);
    }
}

game();