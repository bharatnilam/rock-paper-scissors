// let results = game();

// const counts = {};
// results.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

// if (counts['player'] == counts['computer'])
//     console.log("The match is drawn!");
// else if (counts['player'] > counts['computer'])
//     console.log("Player has won the match!");
// else
//     console.log("Computer has won the match!");

// console.log(counts);

let btn = document.getElementById('rock');
btn.addEventListener('click', playRound('rock'));

function game() {
    let results = [];
    // add player selection from button
    // console.log("Player selection: " + playerSelection);
    
    console.log("Computer selection: " + computerSelection);
    let result = playRound(playerSelection, computerSelection);
    results.push(result);
    if (result == "draw")
        console.log("The game is a draw");
    else
        console.log(result + " wins!");
    return results;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "draw";
    } else if (playerSelection == "rock") {
        let result = (computerSelection == "scissors") ? "player" : "computer" ;
        return result;
    } else if (playerSelection == "paper") {
        let result = (computerSelection == "rock") ? "player" : "computer" ;
        return result
    } else {
        let result = (computerSelection == "paper") ? "player" : "computer" ;
        return result;
    }
}

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))]

}