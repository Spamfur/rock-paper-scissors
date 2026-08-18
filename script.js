

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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    const winnerpara = document.querySelector("#winner-para");
    const playerpara = document.querySelector("#playerscore-para");
    const computerpara = document.querySelector("#computerscore-para");

    function logScore(humanScore,computerScore){
        playerpara.textContent = ("Human score is: " + humanScore);
        computerpara.textContent = ("Computer score is: " + computerScore);
    }

    function playRound(humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" &&
        computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){

            winnerpara.textContent = ("You win this round! " + humanChoice + " beats " + computerChoice + ".");
            ++humanScore;
            return;
        }
    else if (humanChoice !== computerChoice){
        winnerpara.textContent = ("You lose this round! " + computerChoice + " beats " + humanChoice + ".");
        humanWins = false;
        ++computerScore;
        return;
    } else {
        winnerpara.textContent = ("It's a tie!");
        return;
    }
}



const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorbtn = document.querySelector("#scissorbtn");

function endGame(humanScore, computerScore){
    if (humanScore > 5){

    winnerpara.textContent = ("Game has ended, player won!");
        
        return true;
    } else if (computerScore > 5){
        winnerpara.textContent = ("Game has ended, computer won!");
        return true;
    } else if ( computerScore === humanScore){
        winnerpara.textContent = ("Game has ended, it's a tie!");
        return true
    }else{
        return false;
    }
}



rockbtn.addEventListener('click', (e) => {
    playRound("rock", getComputerChoice());
    endGame(humanScore,computerScore);
    if (!endGame(humanScore,computerScore)){
        logScore(humanScore,computerScore);
    }
})
paperbtn.addEventListener('click', (e) => {
    playRound("paper", getComputerChoice());
    endGame(humanScore,computerScore);
    if (!endGame(humanScore,computerScore)){
        logScore(humanScore,computerScore);
    }
})
scissorbtn.addEventListener('click', (e) => {
    playRound("scissors", getComputerChoice());
    endGame(humanScore,computerScore);
    if (!endGame(humanScore,computerScore)){
        logScore(humanScore,computerScore);
    }
})


}

playGame();