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

    // If players choice is rock
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "It's a tie!";
            case "paper":
                return "You lose! Paper beats Rock";
            case "scissors":
                return "You win! Rock beats Scissors";
        }
    }

    // If players choice is paper
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You win! Paper beats Rock";
            case "paper": 
                return "It's a tie!";
            case "scissors": 
                return "You lose! Scissors beats Paper";
        }
    }

    // If players choice is scissors
    else if (playerSelection == "scissors"){
        switch(computerSelection) {
            case "rock": 
                return "You lose! Rock beats Scissors";
            case "paper": 
                return "You win! Scissors beats Paper";
            case "scissors": 
                return "It's a tie!";
        }
    }
}

// Add event listener to each button 
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(playRound(button.id, computerPlay()));
    });
});

/*
// Function to play a 5 round game of rock, paper, scissors
function game() {

    // Variables to keep score
    let playerScore = 0;
    let computerScore = 0;

    // Start 5 round loop 
    for (let i=0; i < 5; i++) {

        // Prompt user for choice and check for proper usage 
        let playerChoice;
        while(true) {
            playerChoice = prompt("Make your choice! Rock, Paper or Scissors!").toLowerCase();

            if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
                console.log("Please make valid entry.");
            }
            else {
                break;
            }
        }
        
        // Play a round 
        result = playRound(playerChoice, computerPlay());
        console.log(result);

        // Update scores
        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++; 
        }

        // Display score
        console.log("Score: Player = " + playerScore + " Computer = " + computerScore);
    }

    // Display final winner/loser/tie message 
    if (playerScore > computerScore) {
        console.log("CONGRATULATIONS, YOU WIN!! Final Score: Player = " + playerScore + " Computer = " + computerScore);
    }
    else if (playerScore < computerScore) {
        console.log("BETTER LUCK NEXT TIME, YOU LOSE... Final Score: Player = " + playerScore + " Computer = " + computerScore);
    }
    else {
        console.log("IT'S A TIE! PLAY AGAIN! Final Score: Player = " + playerScore + " Computer = " + computerScore);
    }
}
*/
