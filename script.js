//Global variables 
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".btn"); 
const playerDiv = document.querySelector("#player-selection");
const compDiv = document.querySelector("#computer-selection"); 
const resultsDiv = document.querySelector("#results");
const scoreboardDiv = document.querySelector("#scoreboard");
const resetBtn = document.querySelector("#reset");

// Function for computers choice
function computerPlay() {

    // Generate random number between 0-2 
    let choice = Math.floor(Math.random() * 3);
    
    // Return rock, paper, or scissors based on random number
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Function to play round 
function playRound(playerSelection, computerSelection) {

    // Convert player input to lowercase
    playerSelection = playerSelection.toLowerCase();

    
    // If player choice is rock
    if (playerSelection == "rock" && (playerScore != 5 && computerScore != 5)) {
        switch(computerSelection) {
            case "rock":
                playerDiv.textContent = "You chose ROCK";
                compDiv.textContent = "Computer chose ROCK";
                resultsDiv.textContent = "It's a tie!";
                return;
            case "paper":
                playerDiv.textContent = "You chose ROCK";
                compDiv.textContent = "Computer chose PAPER";
                resultsDiv.textContent = "You lose! Paper beats Rock";
                computerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
            case "scissors":
                playerDiv.textContent = "You chose ROCK";
                compDiv.textContent = "Computer chose SCISSORS";
                resultsDiv.textContent = "You win! Rock beats Scissors";
                playerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
        }
    }

    // If players choice is paper
    else if (playerSelection == "paper" && (playerScore != 5 && computerScore != 5)) {
        switch(computerSelection) {
            case "rock":
                playerDiv.textContent = "You chose PAPER";
                compDiv.textContent = "Comptuer chose ROCK";
                resultsDiv.textContent = "You win! Paper beats Rock";
                playerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
            case "paper": 
                playerDiv.textContent = "You chose PAPER";
                compDiv.textContent = "Computer chose PAPER";
                resultsDiv.textContent = "It's a tie!";
                return;
            case "scissors": 
                playerDiv.textContent = "You chose PAPER";
                compDiv.textContent = "Computer chose SCISSORS";
                resultsDiv.textContent = "You lose! Scissors beats Paper";
                computerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
        }
    }

    // If players choice is scissors
    else if (playerSelection == "scissors" && (playerScore != 5 && computerScore != 5)){
        switch(computerSelection) {
            case "rock": 
                playerDiv.textContent = "You chose SCISSORS";
                compDiv.textContent = "Computer chose ROCK";
                resultsDiv.textContent = "You lose! Rock beats Scissors";
                computerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
            case "paper": 
                playerDiv.textContent = "You chose SCISSORS";
                compDiv.textContent = "Computer chose PAPER";
                resultsDiv.textContent = "You win! Scissors beats Paper";
                playerScore += 1;
                scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
                if (playerScore == 5) {
                    resultsDiv.textContent = "Congrats! You are the winner! Play Again!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else if (computerScore == 5) {
                    resultsDiv.textContent = "Oh no! You are the loser! Better luck next time!";
                    scoreboardDiv.innerHTML = `Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
                    resetBtn.innerHTML = "Play Again";
                    return;
                }
                else {
                    return; 
                }
            case "scissors": 
                playerDiv.textContent = "You chose SCISSORS";
                compDiv.textContent = "Comptuer chose SCISSORS";
                resultsDiv.textContent = "It's a tie!";
                return;
        }
    }
}


// Function to reset game
function resetGame() {

    // Set scores to zero
    playerScore = 0;
    computerScore = 0;

    // Update DOM
    playerDiv.textContent = "";
    compDiv.textContent = "";
    resultsDiv.textContent = "Make a choice to play! First to 5 points wins!";
    scoreboardDiv.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
    resetBtn.innerHTML = "Reset Game";
}

// Add event listener to each choice button 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, computerPlay());
    });
});

// Add event listener to reset button
const reset = document.querySelector("#reset");

reset.addEventListener("click", resetGame);
