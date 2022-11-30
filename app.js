let playerPoints = 0;
let computerPoints = 0;

const showPlayerPoints = document.querySelector('#player-points');
const showComputerPoints = document.querySelector('#computer-points');
const showGameWinner = document.querySelector('#game-winner');
const winner = document.querySelector('#winner');
const btnRock = document.querySelector('#btn-rock');
const btnRestart = document.querySelector('#restart-button');

btnRestart.addEventListener('click', () => {
    restart();
    showPlayerPoints.textContent = playerPoints;
    showComputerPoints.textContent = computerPoints
});

btnRock.addEventListener('click', () => {
    if (playerPoints >= 5 || computerPoints >= 5) {
        alert("Game is over. Refresh page to play again.")
    }
    let computerChoice = getComputerChoice();
    let playerSelection = "Rock";
    let roundWinner = playRound(playerSelection, computerChoice);
    winner.textContent = roundWinner;
    showPlayerPoints.textContent = playerPoints;
    showComputerPoints.textContent = computerPoints
    let finalWinner = gameWinner(playerPoints, computerPoints);
    showGameWinner.textContent = finalWinner;
})

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    if (playerPoints >= 5 || computerPoints >= 5) {
        alert("Game is over. Refresh page to play again.")
    } else {
        let computerChoice = getComputerChoice();
        let playerSelection = "Paper";
        let roundWinner = playRound(playerSelection, computerChoice);
        winner.textContent = roundWinner;
        showPlayerPoints.textContent = playerPoints;
        showComputerPoints.textContent = computerPoints
        let finalWinner = gameWinner(playerPoints, computerPoints);
        showGameWinner.textContent = finalWinner;
    }
})

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    if (playerPoints >= 5 || computerPoints >= 5) {
        alert("Game is over. Refresh page to play again.")
    } else {
        let computerChoice = getComputerChoice();
        let playerSelection = "Scissors";
        let roundWinner = playRound(playerSelection, computerChoice);
        winner.textContent = roundWinner;
        showPlayerPoints.textContent = playerPoints;
        showComputerPoints.textContent = computerPoints
        let finalWinner = gameWinner(playerPoints, computerPoints);
        showGameWinner.textContent = finalWinner;
    }
})

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
    const tie = `Tie! ${playerSelection} and ${computerSelection} are the same`;
    const playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
    const computerWin = `You lose! ${playerSelection} loses to ${computerSelection}`;
    let winner = false;

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return tie;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        console.log("hello");
        playerPoints += 1;
        winner = true;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        console.log("hello");
        playerPoints += 1;
        return playerWin;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        console.log("hello");
        playerPoints += 1;
        winner = true;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        computerPoints += 1;
        winner = false;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        computerPoints += 1;
        winner = false; 
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        computerPoints += 1;
        winner = false;
    }
    if (winner === true) {
        return playerWin;
    } else {
        return computerWin
    }
}

const gameWinner = (playerPoints, computerPoints) => {
    const playerWonRound = `Congratulations! You won this game of Rock Paper Scissors!`;
    const computerWonRound = 'Tough luck... You lost to a computer!';
    if (playerPoints === 5) {
        return playerWonRound;
    } else if (computerPoints === 5){
        return computerWonRound;
    }
}

const restart = () => {
    playerPoints = 0;
    computerPoints = 0;

};

