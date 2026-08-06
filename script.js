

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)+ 1;

    if (computerChoice === 1){
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Pick either rock, paper or scissors!");
    return humanChoice
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function logScore(humanScore,computerScore){
        console.log("Human score is: " + humanScore);
        console.log("Computer score is: " + computerScore);
    }

    function playRound(humanChoice, computerChoice){
    
    humanChoice = humanChoice.toLowerCase();
    let humanWins = null;

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" &&
        computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){

            console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".");
            humanWins = true;
            return humanWins;
        }
    else if (humanChoice !== computerChoice){
        console.log("You lose this round! " + computerChoice + " beats " + humanChoice + ".");
        humanWins = false;
        return humanWins;
    } else {
        console.log("It's a tie!");
        return humanWins;
    }
}


for(i = 0; i < 5; i++){
    let humanWins = playRound(getHumanChoice(),getComputerChoice());
    if (humanWins){
        ++humanScore;
       logScore(humanScore,computerScore);
    }
    else if (humanWins === false){
        //loss
        ++computerScore;
        logScore(humanScore,computerScore);
    } else if (humanWins === null) {
        //tie
        logScore(humanScore,computerScore);
        
    }
}

if (humanScore > computerScore){
    console.log("You have won!");
} else if (humanScore < computerScore){
    console.log("Computer wins!");
} else {
    console.log("It's somehow a tie!");
}

}

playGame();