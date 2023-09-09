let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
        gameCount = 0;
        playRound('rock');
        gameCount++;
    } else {
        console.log('game continues');
        console.log(gameCount);
        playRound('rock');
        gameCount++;
    }
});

paperBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
        gameCount = 0;
    } else {
        console.log('game continues');
        console.log(gameCount);
        playRound('paper');
        gameCount++;
    }
});

scissorsBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
        gameCount = 0;
    } else {
        console.log('game continues');
        console.log(gameCount);
        playRound('scissors');
        gameCount++;
    }
});

function isMatchEnd() {
    if (gameCount === 4) {
        const winner = document.querySelector('#winner');

        if (playerWins === computerWins)
            winner.textContent = 'The game is a draw!';
        else if (playerWins > computerWins)
            winner.textContent = 'Player wins with ' + playerWins + ' points!';
        else if (playerWins < computerWins)
            winner.textContent = 'Computer wins ' + computerWins + ' points!';

        playerWins = 0;
        computerWins = 0;

        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundStatus = document.querySelector('#round-status');
    const roundStr = 'Player selected ' + playerSelection + ', and computer selected ' + computerSelection + '. ';
    if (playerSelection == computerSelection) {
        roundStatus.textContent = roundStr + 'Round is a draw!';
        updateScore('player');
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            roundStatus.textContent = roundStr + 'Player has won the round';
            playerWins++;
            updateScore('player');
        } else {
            roundStatus.textContent = roundStr + 'Computer has won the round';
            computerWins++;
            updateScore('computer');
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            roundStatus.textContent = roundStr + 'Player has won the round';
            playerWins++;
            updateScore('player');
        } else {
            roundStatus.textContent = roundStr + 'Computer has won the round';
            computerWins++;
            updateScore('computer');
        }
    } else {
        if (computerSelection == "paper") {
            roundStatus.textContent = roundStr + 'Player has won the round';
            playerWins++;
            updateScore('player');
        } else {
            roundStatus.textContent = roundStr + 'Computer has won the round';
            computerWins++;
            updateScore('computer');
        }
    }
}

function updateScore (result) {
    const score = document.querySelector('#curr-score')

    score.textContent = 'Player: ' + playerWins + ' - ' + computerWins + ' : Computer';
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))]
}