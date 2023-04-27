const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('#results');
const buttons = document.querySelectorAll('button');

resultDisplay.textContent = 'Click any button to play!!';
resultDisplay.style.textAlign = 'center';
resultDisplay.style.marginTop ='15px';





const getComputerChoice = () => {
    randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 0){
        return 'rock';
    }else if (randomChoice === 1) {
        return 'paper';
    }else {
        return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultDisplay.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
        cScore.textContent = ++computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultDisplay.textContent = (`You lose! ${computerSelection} beats ${playerSelection}`);
        cScore.textContent = ++computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultDisplay.textContent =  (`You lose! ${computerSelection} beats ${playerSelection}`);
        cScore.textContent = ++computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultDisplay.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        pScore.textContent = ++playerScore;

    }  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultDisplay.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        pScore.textContent = `${++playerScore}`;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultDisplay.textContent = (`You win! ${playerSelection} beats ${computerSelection}`);
        pScore.textContent = ++playerScore;
    } else if (playerSelection === computerSelection){
        resultDisplay.textContent =  (`It's a tie`);
       
    }

    if (playerScore === 5 || computerScore === 5){
       resultDisplay.textContent = playerScore > computerScore ? 'Player Wins': 'Computer Wins';
       resultDisplay.style.fontSize = '30px';
       resultDisplay.style.fontWeight = '900';
       resultDisplay.style.color =  'rgb(84, 249, 255)';
       buttons.forEach(button=>{
        button.removeEventListener('click', game);
       })

       setTimeout(()=>{
        window.location.reload()
       }, 1000);

    }
}




const game = (e) => {
 
    let playerSelection = e.target.textContent;

    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

       
  

      
}


buttons.forEach(button => {
    button.addEventListener('click', game)
})

