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
};

/*
function userChoice () {
    const userChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    return userChoice;
}
*/

function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection)
    console.log("Computer: " + computerSelection)
    if (playerSelection == computerSelection) {
        return ("Tie");
    }
    //player chooses rock
    else if (playerSelection == r && computerSelection == s) {
        pScore += 1;
        return ("You win. Rock beats scissors.")
    } else if (playerSelection == r && computerSelection == p) {
        cScore += 1;
        return ("You lose. Paper beats rock.")
    }

    //player chooses paper
    else if (playerSelection == p && computerSelection == r) {
        pScore += 1;
        return ("You win. Paper beats rock.")
    } else if (playerSelection == p && computerSelection == s) {
        cScore += 1
        return ("You lose. Scissors beats paper.")
    }
    //player chooses scissors
    else if (playerSelection == s && computerSelection == p) {
        pScore += 1;
        return ("You win. Scissors beats paper.")
    } else if (playerSelection == s && computerSelection == r) {
        cScore += 1;
        return ("You lose. Rock beats scissors.")
    }

};

//const playerSelection = userChoice();
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));

function game() {
    console.log(playRound(userChoice(), computerPlay()));
    console.log(playRound(userChoice(), computerPlay()));
    console.log(playRound(userChoice(), computerPlay()));
    console.log(playRound(userChoice(), computerPlay()));
    console.log(playRound(userChoice(), computerPlay()));
};

//game();

const buttons = document.querySelectorAll('button');

const display = document.querySelector(".results");

const player = document.querySelector(".player");

const computer = document.querySelector(".computer");

let pScore = 0;

let cScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML = playRound(button.id, computerPlay());
        player.innerHTML = "Player: " + pScore;
        computer.innerHTML = "Computer: " + cScore;
        if (pScore>=5) {
            player.innerHTML = "WINNER";
        } else if (cScore >=5) {
            computer.innerHTML = "WINNER";
        };
    });
});

