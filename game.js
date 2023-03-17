const game = () => {
    let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors'];

    const playRound = (player,computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            player = player.toLowerCase();
            computer = computer.toLowerCase();
            if(player === computer){
                result.textContent = 'Tie';
            }
            else if(player === 'rock'){
                if(computer === 'paper'){
                    result.textContent = 'Computer Won :(';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
    
                }else{
                    result.textContent = 'Player Won!';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }
            else if(player === 'scissors'){
                if(computer === 'rock'){
                    result.textContent = 'Computer Won :(';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }else{
                    result.textContent = 'Player Won!';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }
            else if(player === 'paper'){
                if(computer === 'scissors'){
                    result.textContent = 'Computer Won :(';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }else{
                    result.textContent = 'Player Won!';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }
    } 
    function playingGame(){
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${10-moves}`;
            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];
            playRound(this.innerText,computerChoice);
            if(moves == 10){
                gameOver(playerOptions,movesLeft);
            }
    }
	for (var i = 0 ; i < playerOptions.length; i++) {
			playerOptions[i].addEventListener('click', playingGame, false);
        }
    }
	const gameOver = (playerOptions,movesLeft) => {
        const endGame = document.querySelector('.end-game');
		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})
		chooseMove.innerText = 'Game Over!!';
		movesLeft.style.display = 'none';
		if(playerScore > computerScore){
            result.style['justify-content'] = 'center';
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game.';
			result.style.color = 'black';
            reloadBtn.innerText = 'Restart';
		    reloadBtn.style.display = 'flex';
            reloadBtn.style['justify-content'] = 'center';
		}
		else if(playerScore < computerScore){
            result.style['justify-content'] = 'center';
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game.';
			result.style.color = 'black';
            reloadBtn.innerText = 'Restart';
		    reloadBtn.style.display = 'flex';
            reloadBtn.style['justify-content'] = 'center';
		}
		else{
            result.style['justify-content'] = 'center';
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'black';
            reloadBtn.innerText = 'Restart';
		    reloadBtn.style.display = 'flex';
            reloadBtn.style['justify-content'] = 'center';
		}
		reloadBtn.addEventListener('click',() => {
		window.location.reload();
		})
	}
	playGame();	
}
game();

