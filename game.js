function computerPlay(){ 
    let random =  Math.floor(Math.random() * 3) + 1;
    if( random === 1){
        return "rock";
    }
    if (random === 2){
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection){
    
    let lower = playerSelection.toLowerCase();

    console.log(playerSelection +" "+ computerSelection);

    if (lower === "rock" & computerSelection === "paper"){
        return "You Lose! Paper beats Rock!"
    }
    if (lower === "rock" & computerSelection === "scissors"){
        return "You win! Good Job!"
    }
    if (lower === "paper" & computerSelection === "rock"){  
        return "You win! Good Job!";
    }
    if (lower === "paper" & computerSelection === "scissors"){
        return "You lose! Scissors beats Paper!";
    }
    if (lower === "scissors" & computerSelection === "rock"){
        return "You lose! Rock beats Scissors!";
    }
    if (lower === "scissors" & computerSelection === "paper"){
        return "You win! Good Job!";
    }
    if (lower ===  computerSelection){
        return "It's a tie!";
    } 

}

function game(){
    let score = 0;
    for (let i = 0 ; i < 5; i++){
        let playerSelection = prompt("What's your move?");
        let computerSelection = computerPlay();
        let play_round = playRound(playerSelection, computerSelection);
        console.log(play_round);
        if (play_round == "You win! Good Job!"){
            score++; 
        }
        if (play_round == "It's a tie!"){
            i--;
        }
    }
    if (score >= 3){
        return "Winner!";
    }
    return "Loser!"
}


document.write(game());