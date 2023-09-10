let playerWins = 0;
let computerWins = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
    } else {
        console.log('game continues');
        playRound('rock');
        console.log(playerWins + ' ' + computerWins);
    }
});

paperBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
    } else {
        console.log('game continues');
        playRound('paper');
        console.log(playerWins + ' ' + computerWins);
    }
});

scissorsBtn.addEventListener('click', function() {
    if (isMatchEnd()) {
        console.log('game has ended');
    } else {
        console.log('game continues');
        playRound('scissors');
        console.log(playerWins + ' ' + computerWins);
    }
});

function isMatchEnd() {
    const winner = document.querySelector('#winner');
    if (playerWins === 5 || computerWins === 5) {
        if (playerWins === computerWins)
            winner.textContent = 'The game is a draw!';
        else if (playerWins > computerWins)
            winner.textContent = 'Player wins with ' + playerWins + ' points!';
        else if (playerWins < computerWins)
            winner.textContent = 'Computer wins ' + computerWins + ' points!';

        
        const score = document.querySelector('#score')
        score.textContent = 'Player: ' + playerWins + ' - ' + computerWins + ' : Computer';
        
        playerWins = 0;
        computerWins = 0;

        return true;
    } else {
        winner.textContent = '';
        return false;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundStatus = document.querySelector('#round-status');
    const roundStr = 'Score: Player selected ' + playerSelection + ', and computer selected ' + computerSelection + '. ';
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
    if (playerWins === 5 || computerWins === 5)
        isMatchEnd();
}

function updateScore (result) {
    const score = document.querySelector('#score')
    score.textContent = 'Player: ' + playerWins + ' - ' + computerWins + ' : Computer';
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))]
}