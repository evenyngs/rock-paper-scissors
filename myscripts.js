let r = "rock";
let p = "paper";
let s = "scissors";

function computerPlay() {
    //generate random number
    let n = Math.random();

    if (n < 0.34) {
        n = r;
    } else if (n <= 0.67) {
        n = p;
    } else {
        n = s;
    }
    return n;
}


function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection)
    console.log("Computer: " + computerSelection)
    if (playerSelection == computerSelection) {
        return ("Tie");
    }
    //player chooses rock
    else if (playerSelection == r && computerSelection == s) {
        return ("You win. Rock beats scissors.")
    } else if (playerSelection == r && computerSelection == p) {
        return ("You lose. Paper beats rock.")
    }

    //player chooses paper
    else if (playerSelection == p && computerSelection == r) {
        return ("You win. Paper beats rock.")
    } else if (playerSelection == p && computerSelection == s) {
        return ("You lose. Scissors beats paper.")
    }
    //player chooses scissors
    else if (playerSelection == s && computerSelection == p) {
        return ("You win. Scissors beats paper.")
    } else if (playerSelection == s && computerSelection == r) {
        return ("You lose. Rock beats scissors.")
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//function game() {

//}
