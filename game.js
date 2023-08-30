game();

function game() {

    for (i = 0; i < 5 ; i++) {

        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log("Player selection: " + playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer selection: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + "The game is a draw!");
        return "Game draw";
    } else if (playerSelection == "rock") {
        let result = (computerSelection == "scissors") ? "Player wins" : "Computer wins" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result;
    } else if (playerSelection == "paper") {
        let result = (computerSelection == "rock") ? "Player wins" : "Computer wins" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result
    } else {
        let result = (computerSelection == "paper") ? "Player wins" : "Computer wins" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result;
    }
}

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    return choices[(Math.floor(Math.random() * choices.length))]

}