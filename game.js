let results = game();

const counts = {};
results.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

if (counts['player'] == counts['computer'])
    console.log("The match is drawn!");
else if (counts['player'] > counts['computer'])
    console.log("Player has won the match!");
else
    console.log("Computer has won the match!");

console.log(counts);


function game() {
    let results = [];
    for (i = 1; i <= 5 ; i++) {
        console.log("Game number: " + i);
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        console.log("Player selection: " + playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer selection: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        results.push(result);
        if (result == "draw")
            console.log("The game is a draw");
        else
            console.log(result + " wins!");
    }
    return results;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + "The game is a draw!");
        return "draw";
    } else if (playerSelection == "rock") {
        let result = (computerSelection == "scissors") ? "player" : "computer" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result;
    } else if (playerSelection == "paper") {
        let result = (computerSelection == "rock") ? "player" : "computer" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result
    } else {
        let result = (computerSelection == "paper") ? "player" : "computer" ;
        alert("You selected: " + playerSelection + "\nComputer selected: " + computerSelection + "\n" + result + "!");
        return result;
    }
}

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))]

}